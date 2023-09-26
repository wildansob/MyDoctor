import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfileComponent = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Nadhifa Imara</Text>
        <Text style={styles.profession}>Brand Activator</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfileComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
