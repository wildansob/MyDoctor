import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILHospitalBG,
} from '../../assets';
import {colors, fonts} from '../../utils';
import ListHospitals from '../../components/molecules/ListHospitals/ListHospitals';

const HospitalsScreen = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals
          pic={DummyHospital1}
          type={'Rumah Sakit'}
          name={'Al-Islam Bandung'}
          address={'Jalan Soekarno-Hatta'}
        />
        <ListHospitals
          pic={DummyHospital2}
          type={'Rumah Sakit Anak'}
          name={'Permata Bunda'}
          address={'Cinunuk, Bandung'}
        />
        <ListHospitals
          pic={DummyHospital3}
          type={'Klinik Jantung'}
          name={'Bandung Heart Clinic'}
          address={'Jalan Buahbatu, Bandung'}
        />
      </View>
    </View>
  );
};

export default HospitalsScreen;

const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
