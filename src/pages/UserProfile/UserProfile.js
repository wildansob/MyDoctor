import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Profile from '../../components/molecules/Profile/Profile';
import List from '../../components/molecules/List/List';
import Gap from '../../components/atoms/Gap/Gap';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title={'Profile'} />
      <Gap height={10} />
      <Profile name={'Nadhifa Imara'} desc={'Brand Activator'} />
      <Gap height={14} />
      <List
        name={'Edit profile'}
        desc={'Last Update Yesterday'}
        type={'next'}
        icon={'edit-profile'}
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name={'Languange'}
        desc={'Last Update Yesterday'}
        type={'next'}
        icon={'languange'}
      />
      <List
        name={'Give Use Rate'}
        desc={'Last Update Yesterday'}
        type={'next'}
        icon={'rate'}
      />
      <List
        name={'Help Center'}
        desc={'Last Update Yesterday'}
        type={'next'}
        icon={'help'}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
