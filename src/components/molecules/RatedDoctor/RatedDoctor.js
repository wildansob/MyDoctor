import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DummyDoctor1, DummyDoctor2, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = ({image, name, spesialis, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.wrapper}>
        <Text style={styles.doctorName}>{name}</Text>
        <Text style={styles.category}>{spesialis}</Text>
      </View>
      <View style={styles.star}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  star: {
    flexDirection: 'row',
  },
  doctorName: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.secondary.normal,
    marginTop: 2,
  },
  wrapper: {
    flex: 1,
  },
});
