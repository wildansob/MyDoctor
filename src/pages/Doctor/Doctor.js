import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeProfileComponent from '../../components/molecules/HomeProfile/HomeProfileComponent';
import DoctorCategory from '../../components/molecules/DoctorCategory/DoctorCategory';
import RatedDoctor from '../../components/molecules/RatedDoctor/RatedDoctor';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';
import {colors, fonts} from '../../utils';

const DoctorScreen = () => {
  return (
    <View style={styles.page}>
      <HomeProfileComponent />
      <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <Text>Top Rated Doctor</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default DoctorScreen;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    width: 211,
    height: 53,
    marginTop: 30,
    marginBottom: 16,
  },
});
