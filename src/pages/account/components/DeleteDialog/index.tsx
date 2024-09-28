import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useAccount} from '../../hooks/useAccount';
import Dialog from '@/components/dialog';
import delete_img from '@/assets/img/delete.png';
import Button from '@/components/button';
import {ICard, ICardChild} from '../../type';

interface IProps {
  open: boolean;
  onClose: () => void;
  activeCard: ICard;
  activeChild: ICardChild;
}

const DeleteDialog: React.FC<IProps> = ({
  open,
  onClose,
  activeCard,
  activeChild,
}) => {
  const {handleDelete} = useAccount();
  const headerRender = () => {
    return (
      <View style={styles.header}>
        <Image style={styles.del_icon} source={delete_img} />
        <View style={styles.del_txt_wrapper}>
          <Text style={styles.del_txt}>确认删除</Text>
          <Text style={styles.child_title}>{activeChild?.title}</Text>
          <Text style={styles.del_txt}> 不可恢复，确认删除？</Text>
        </View>
      </View>
    );
  };
  const onConfirm = () => {
    handleDelete(activeCard?.id, activeChild?.id);
    onClose && onClose();
  };
  const onCancel = () => {
    onClose && onClose();
  };
  return (
    <>
      <Dialog open={open} onClose={onClose} headerRender={headerRender}>
        <View style={styles.container}>
          <View style={styles.btnwrapper}>
            <Button style={{marginRight: 5}} title="取消" onPress={onCancel} />
            <Button title="确定" type="primary" onPress={onConfirm} />
          </View>
        </View>
      </Dialog>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnwrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  del_icon: {
    height: 16,
    width: 16,
  },
  del_txt_wrapper: {
    flexDirection: 'row',
  },
  del_txt: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  child_title: {
    fontSize: 14,
    fontStyle: 'italic',
    marginHorizontal: 5,
  },
});

export default DeleteDialog;
