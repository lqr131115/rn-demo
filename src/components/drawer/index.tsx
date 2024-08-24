import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View, Image} from 'react-native';

interface IProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  [key: string]: any;
}

const CDrawer: React.FC<IProps> = props => {
  const {children, open = false, title = '', onClose} = props;
  const [modalVisible, setModalVisible] = useState(open);

  const _renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.left} />
        <View style={styles.middle}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right}>
          <Pressable
            style={styles.openButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Image
              style={{width: 16, height: 16}}
              source={{
                uri: require('./assets/close.svg'),
              }}
            />
          </Pressable>
        </View>
      </View>
    );
  };
  const handleClose = () => {
    setModalVisible(false);
    onClose && onClose();
  };
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}>
        <View style={styles.container}>
          <View style={styles.content}>
            {_renderHeader()}
            {children}
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
    borderRadius: 12,
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
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
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CDrawer;
