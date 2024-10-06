import React from 'react';
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
import {ICard} from '../../type';
interface IProps {
  info?: ICard;
  expand?: boolean;
  onExpand?: (id: string) => void;
  onEdit?: (cardId: string, childId: string) => void;
  onDelete?: (cardId: string, childId: string) => void;
}

const Card: React.FC<IProps> = ({
  info,
  expand = true,
  onExpand,
  onEdit,
  onDelete,
}) => {
  if (!info) {
    return null;
  }
  const {title, children = []} = info;
  const onPress = (childId: string) => {
    onEdit && onEdit(info.id, childId);
  };
  const onLongPress = (childId: string) => {
    onDelete && onDelete(info.id, childId);
  };
  function renderContent() {
    if (!expand) {
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
                onPress={() => onPress(item.id)}
                onLongPress={() => onLongPress(item.id)}>
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
        style={[styles.header, {borderBottomWidth: expand ? 1 : 0}]}
        onPress={() => {
          onExpand && onExpand(info.id);
        }}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.arrow}>
          {expand ? (
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
