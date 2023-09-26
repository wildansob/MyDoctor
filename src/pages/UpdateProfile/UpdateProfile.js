import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Profile from '../../components/molecules/Profile/Profile';
import InputComponent from '../../components/atoms/Input/InputComponent';
import Button from '../../components/atoms/Button/Button';
import {colors} from '../../utils';
import Gap from '../../components/atoms/Gap/Gap';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title={'Edit Profile'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile />
          <Gap height={26}/>
          <InputComponent label={'Full name'} />
          <Gap height={24} />
          <InputComponent label={'Pekerjaan'} />
          <Gap height={24} />
          <InputComponent label={'Email'} />
          <Gap height={24} />
          <InputComponent label={'Password'} />
          <Gap height={40} />
          <Button title={'Save Profile'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
