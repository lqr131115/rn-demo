import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Drawer from '@/components/drawer';

interface IProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  activeCardId?: string;
  activeChildId?: string;
}

const AddDrawer: React.FC<IProps> = ({
  open,
  onClose,
  title = 'Add',
  activeCardId,
  activeChildId,
}) => {
  return (
    <>
      <Drawer open={open} onClose={onClose} title={title}>
        <View style={styles.container}>
          <Text>activeCardId: {activeCardId}</Text>
          <Text>activeChildId: {activeChildId}</Text>
        </View>
      </Drawer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddDrawer;
