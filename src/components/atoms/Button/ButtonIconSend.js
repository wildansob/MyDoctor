import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

const ButtonIconSend = ({disable}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container(disable)}>
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </TouchableOpacity>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
