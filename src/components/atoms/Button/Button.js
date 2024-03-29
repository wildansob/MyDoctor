import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import IconOnly from './IconOnly';
import {fonts} from '../../../utils';
import ButtonIconSend from './ButtonIconSend';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'btn-icon-send') {
    return <ButtonIconSend disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],
  }),
});
