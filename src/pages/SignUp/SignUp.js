import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import InputComponent from '../../components/atoms/Input/InputComponent';
import Button from '../../components/atoms/Button/Button';
import {colors} from '../../utils';
import Gap from '../../components/atoms/Gap/Gap';

const SignUpScreen = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.container}>
        <InputComponent label="Full Name" />
        <Gap height={24} />
        <InputComponent label="Pekerjaan" />
        <Gap height={24} />
        <InputComponent label="Email" />
        <Gap height={24} />
        <InputComponent label="Password" />
        <Gap height={24} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    padding: 40,
    paddingTop: 0,
  },
});
