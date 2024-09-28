import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type ButtonType = 'default' | 'primary' | 'danger';

interface IProps {
  title?: string;
  type?: ButtonType;
  onPress?: () => void;
  [key: string]: any;
}
const statButton = (type: ButtonType) => {
  let btnBgColor = '#fff';
  let btnTxtColor = '#000';
  let btnBorderColor = '#000';
  if (type === 'primary') {
    btnBgColor = '#007bff';
    btnTxtColor = '#fff';
    btnBorderColor = '#007bff';
  }
  if (type === 'danger') {
    btnBgColor = '#dc3545';
    btnTxtColor = '#fff';
    btnBorderColor = '#dc3545';
  }
  return {btnBgColor, btnTxtColor, btnBorderColor};
};
const Button: React.FC<IProps> = props => {
  const {title = 'Button', type = 'default', onPress} = props;
  const {btnBgColor, btnTxtColor, btnBorderColor} = statButton(type);
  return (
    <Pressable style={[styles.container, props?.style ?? {}]} onPress={onPress}>
      <View
        style={[
          styles.wrapper,
          {backgroundColor: btnBgColor, borderColor: btnBorderColor},
        ]}>
        <Text style={[styles.btnTxt, {color: btnTxtColor}]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
  },
  btnTxt: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Button;
