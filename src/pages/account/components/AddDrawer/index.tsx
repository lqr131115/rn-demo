import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Drawer from '@/components/drawer';
import {useAccount} from '../../hooks/useAccount';

interface IProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

const AddDrawer: React.FC<IProps> = ({open, onClose, title = 'Add'}) => {
  const {activeCard, activeChild} = useAccount();
  return (
    <>
      <Drawer open={open} onClose={onClose} title={title}>
        <View style={styles.container}>
          <Text>activeCard: {activeCard?.id}</Text>
          <Text>activeChild: {activeChild?.id}</Text>
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
