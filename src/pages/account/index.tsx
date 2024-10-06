import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Switch,
} from 'react-native';
import Card from './components/Card';
import {useAccount} from './hooks/useAccount';
import DeleteDialog from './components/DeleteDialog';
import {useAppDispatch} from '@/hooks/useRdx';
import {
  resetAccountCard,
  toggleCardExpand,
  togglePwdVisible,
} from '@/store/reducer/account';
const Account: React.FC = () => {
  const {accountCard} = useAccount();
  const dispatch = useAppDispatch();
  const [delDialogVisible, setDelDialogVisible] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string>();
  const [activeChildId, setActiveChildId] = useState<string>();
  const activeCard = accountCard.find(item => item.id === activeCardId);
  const activeChild = activeCard?.children.find(
    item => item.id === activeChildId,
  );
  const [isPwdVisible, setIsPwdVisible] = useState(true);
  const togglePasswordVisible = () => {
    setIsPwdVisible(!isPwdVisible);
    dispatch(togglePwdVisible({visible: !isPwdVisible}));
  };
  const handleReset = () => {
    dispatch(resetAccountCard());
  };
  const handleExpand = (id: string) => {
    dispatch(toggleCardExpand({id}));
  };
  const handleEdit = (cardId: string, childId: string) => {
    setActiveCardId(cardId);
    setActiveChildId(childId);
  };
  const handleDelete = (cardId: string, childId: string) => {
    setActiveCardId(cardId);
    setActiveChildId(childId);
    setDelDialogVisible(true);
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
        <View style={styles.right}>
          <Switch onValueChange={togglePasswordVisible} value={isPwdVisible} />
        </View>
      </View>
    );
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
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </View>
          );
        }}
      />
      <DeleteDialog
        activeCardId={activeCardId}
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
