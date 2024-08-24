import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;
export const HIT_SLOP = {
  left: 10,
  right: 10,
  top: 10,
  bottom: 10,
};
