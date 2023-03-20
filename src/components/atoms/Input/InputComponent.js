import {StyleSheet, TextInput, View, Text} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const InputComponent = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
});
