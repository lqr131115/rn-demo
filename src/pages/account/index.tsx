import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import Card from './components/Card';
import {useAccount} from './hooks/useAccount';
import DeleteDialog from './components/DeleteDialog';
import {ICard, ICardChild} from './type';
import {useAppDispatch} from '@/hooks/useRdx';
import {resetAccountCard, toggleCardExpand} from '@/store/reducer/account';
const Account: React.FC = () => {
  const {accountCard, activeCard, activeChild} = useAccount();
  const dispatch = useAppDispatch();
  const [delDialogVisible, setDelDialogVisible] = useState(false);
  const handleReset = () => {
    dispatch(resetAccountCard());
  };
  const handleExpand = (id: string) => {
    dispatch(toggleCardExpand({id}));
  };
  const renderPageTitle = () => {
    return (
      <View style={styles.titleWrapper}>
        <View style={styles.left}>
          <Pressable onPress={handleReset}>
            <Text>Reset</Text>
          </Pressable>
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>Account</Text>
        </View>
        <View style={styles.right} />
      </View>
    );
  };
  const onDelete = (info: ICard, child: ICardChild) => {
    console.log('onDelete', info, child);
    setDelDialogVisible(true);
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" />
      {renderPageTitle()}
      <FlatList
        contentContainerStyle={styles.cards}
        data={accountCard}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Card
                info={item}
                expand={item.expand}
                onExpand={handleExpand}
                onDelete={onDelete}
              />
            </View>
          );
        }}
      />
      <DeleteDialog
        activeCard={activeCard}
        activeChild={activeChild}
        open={delDialogVisible}
        onClose={() => setDelDialogVisible(false)}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
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
  cards: {
    margin: 10,
  },
  card: {
    marginBottom: 10,
  },
});

export default Account;
