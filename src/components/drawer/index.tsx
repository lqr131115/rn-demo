import React, {useRef} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import close_img from '@/assets/img/close.png';
import {HIT_SLOP, WINDOW_HEIGHT} from '@/constants';
interface IProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  enableTabBgClose?: boolean;
  [key: string]: any;
}
const CModal: React.FC<IProps> = props => {
  const {
    children,
    open = false,
    title = '',
    enableTabBgClose = true,
    onClose,
  } = props;
  const {current: contentLayout} = useRef<Record<string, number>>({
    height: WINDOW_HEIGHT,
    width: 0,
  });
  const translateYDistance = useRef(
    new Animated.Value(contentLayout.height),
  ).current;

  const handleClose = () => {
    Animated.timing(translateYDistance, {
      toValue: contentLayout.height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      onClose && onClose();
    });
  };
  const onContentLayout = (e: any) => {
    const {height = WINDOW_HEIGHT} = e?.nativeEvent?.layout ?? {};
    contentLayout.height = height;
    Animated.timing(translateYDistance, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const _renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.left} />
        <View style={styles.middle}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right}>
          <Pressable hitSlop={HIT_SLOP} onPress={handleClose}>
            <Image style={styles.close_img} source={close_img} />
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={open}
        onRequestClose={() => onClose && onClose()}
        statusBarTranslucent>
        <View style={styles.viewWrapper}>
          <View
            style={styles.section}
            onTouchEnd={() => enableTabBgClose && handleClose()}
          />
          <Animated.View
            style={[
              styles.container,
              {
                transform: [{translateY: translateYDistance}],
              },
            ]}>
            <View style={styles.content} onLayout={onContentLayout}>
              <View style={styles.headerWrapper}>{_renderHeader()}</View>
              <ScrollView style={styles.bodyWrapper}>{children}</ScrollView>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  section: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    maxHeight: WINDOW_HEIGHT * 0.8,
    minHeight: WINDOW_HEIGHT * 0.4,
  },
  headerWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  close_img: {
    height: 22,
    width: 22,
  },
  bodyWrapper: {
    paddingHorizontal: 5,
  },
});

export default CModal;
