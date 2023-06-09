import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILGetStarted, ILLogo} from '../../assets';
import Button from '../../components/atoms/Button/Button';
import Gap from '../../components/atoms/Gap/Gap';
import {colors, fonts} from '../../utils';

const GetStartedScreen = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 91,
    fontFamily: fonts.primary[600],
    maxWidth: 236,
  },
});
