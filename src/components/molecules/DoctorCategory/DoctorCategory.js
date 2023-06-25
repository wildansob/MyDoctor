import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ILCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <ILCatUmum style={styles.illustration} />
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>Dokter Umum</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 11,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
