import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Card from './components/Card';
import {mockCards} from './mock';
const Account: React.FC = () => {
  const [data, setData] = useState(mockCards);
  const renderPageTitle = () => {
    return (
      <View style={styles.titleWrapper}>
        <View style={styles.left} />
        <View style={styles.middle}>
          <Text style={styles.title}>Account</Text>
        </View>
        <View style={styles.right} />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" />
      {renderPageTitle()}
      <FlatList
        contentContainerStyle={styles.cards}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Card info={item} expand={true} />
            </View>
          );
        }}
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
