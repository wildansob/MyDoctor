import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import InputComponent from '../../components/atoms/Input/InputComponent';
import Link from '../../components/atoms/Link/Link';
import Button from '../../components/atoms/Button/Button';
import Gap from '../../components/atoms/Gap/Gap';
import {colors} from '../../utils';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <InputComponent label="Email Address" />
      <Gap height={24} />
      <InputComponent label="Password" />
      <Gap height={10} />
      <Link label="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link
        label="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
    color: colors.text.primary,
  },
});
