import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import close_img from '@/assets/img/close.png';
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
          <Pressable onPress={handleClose}>
            <Image style={styles.close_img} source={close_img} />
            {/* <Text>Text</Text> */}
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
        onRequestClose={handleClose}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.headerWrapper}>{_renderHeader()}</View>
            <View style={styles.bodyWrapper}>{children}</View>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
