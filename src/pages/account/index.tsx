import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
} from 'react-native';
import AddModal from './components';
const Account: React.FC = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
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
      <ScrollView>
        <Pressable
          onPress={() => {
            setAddModalVisible(true);
          }}>
          <Text>AddModal</Text>
        </Pressable>
        {Array.from({length: 10}).map((_, index) => (
          <Text key={index}>{index}</Text>
        ))}
      </ScrollView>
      <AddModal
        open={addModalVisible}
        title="Add"
        onClose={() => setAddModalVisible(false)}
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
    borderWidth: 1,
    borderColor: 'red',
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
});
export default Account;
