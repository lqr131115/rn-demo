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
import Drawer from '@/components/drawer';
const Account: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
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
        <View>
          <Text>---------</Text>
          <Text>---------</Text>
          <Text>---------</Text>
        </View>
        <Pressable
          onPress={() => {
            setDrawerVisible(true);
          }}>
          <Text>Draw</Text>
        </Pressable>
        {Array.from({length: 10}).map((_, index) => (
          <Text key={index}>{index}</Text>
        ))}
      </ScrollView>
      <Drawer
        open={drawerVisible}
        title="Drawer"
        onClose={() => setDrawerVisible(false)}>
        <View>
          {Array.from({length: 100}).map((_, index) => (
            <View key={index}>
              <Text style={{fontSize: 20}}>{index}</Text>
            </View>
          ))}
        </View>
      </Drawer>
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
