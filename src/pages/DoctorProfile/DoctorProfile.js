import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Profile from '../../components/molecules/Profile/Profile';
import ProfileItem from '../../components/molecules/ProfileItem/ProfileItem';
import Button from '../../components/atoms/Button/Button';
import Gap from '../../components/atoms/Gap/Gap';
import {colors} from '../../utils';

const DoctorProfile = () => {
  return (
    <View style={styles.page}>
      <Header title={'Doctor Profile'} />
      <Profile name={'Doctor Patricia'} desc={'Pedistrian'}  />
      <Gap height={10} />
      <ProfileItem label={'Alumnus'} value={'Universitas Indonesia, 2020'} />
      <ProfileItem
        label={'Tempat Praktik'}
        value={'Rumah Sakit Uber, Bandung'}
      />
      <ProfileItem label={'No STR'} value={'12345678'} />
      <View style={styles.button}>
        <Button title={'Start Consultation'} />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  button : {
    paddingHorizontal: 40,
    paddingTop: 23
  }
});
