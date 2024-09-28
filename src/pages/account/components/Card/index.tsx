import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import arrow_up from '@/assets/img/arrow-up.png';
import arrow_down from '@/assets/img/arrow-down.png';
interface IProps {
  expand?: boolean;
  info?: Record<string, any>;
}

const Card: React.FC<IProps> = ({info, expand = false}) => {
  const [open, setOpen] = useState(expand);
  if (!info) {
    return null;
  }
  const {title, children = []} = info;

  function renderContent() {
    if (!open) {
      return null;
    }
    return (
      <SafeAreaView style={styles.content}>
        <FlatList
          data={children}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            const isLast = index === children.length - 1;
            return (
              <Pressable
                style={[styles.wrapper, {borderBottomWidth: isLast ? 0 : 1}]}
                onLongPress={() => console.log(item.title)}>
                <Text>{item.title}</Text>
                <View style={styles.info}>
                  <Text>账号: {item.account}</Text>
                  <Text>密码: {item.password}</Text>
                </View>
              </Pressable>
            );
          }}
        />
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.header, {borderBottomWidth: open ? 1 : 0}]}
        onPress={() => {
          setOpen(!open);
        }}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.arrow}>
          {open ? (
            <Image style={styles.arrow_icon} source={arrow_down} />
          ) : (
            <Image style={styles.arrow_icon} source={arrow_up} />
          )}
        </View>
      </Pressable>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  arrow: {
    marginLeft: 'auto',
  },
  arrow_icon: {},
  content: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Card;
