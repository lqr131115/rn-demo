import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import close_img from '@/assets/img/close.png';
import {HIT_SLOP} from '@/constants';

interface IProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  [key: string]: any;
}

const CModal: React.FC<IProps> = props => {
  const {children, open = false, title = '', onClose} = props;
  const handleClose = () => {
    onClose && onClose();
  };
  const _renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.left} />
        <View style={styles.middle}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right}>
          <Pressable hitSlop={HIT_SLOP} onPress={handleClose}>
            <Image style={styles.close_img} source={close_img} />
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={open}
        onRequestClose={handleClose}
        statusBarTranslucent>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.headerWrapper}>{_renderHeader()}</View>
            <ScrollView style={styles.bodyWrapper}>{children}</ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 6,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {},
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  right: {},
  close_img: {
    height: 22,
    width: 22,
  },
  bodyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});

export default CModal;
