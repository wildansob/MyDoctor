import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import List from '../../components/molecules/List/List';
import {
  DummyDoctor1,
  DummyDoctor10,
  DummyDoctor11,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type={'dark'}
        title={'Pilih Dokter Anak'}
        onPress={() => navigation.goBack()}
      />
      <List
        type={'next'}
        image={DummyDoctor2}
        name={'dr. Wildan Shobara'}
        desc={'Pria'}
        onPress={() => navigation.navigate('ChattingScreen')}
      />
      <List
        type={'next'}
        image={DummyDoctor10}
        name={'dr. Yanyan Supriatna'}
        desc={'Pria'}
        onPress={() => navigation.navigate('ChattingScreen')}
      />
      <List
        type={'next'}
        image={DummyDoctor4}
        name={'dr. Nursyifa Dewi'}
        desc={'Wanita'}
        onPress={() => navigation.navigate('ChattingScreen')}
      />
      <List
        type={'next'}
        image={DummyDoctor6}
        name={'dr. Wilman Shobara'}
        desc={'Pria'}
        onPress={() => navigation.navigate('ChattingScreen')}
      />
      <List
        type={'next'}
        image={DummyDoctor5}
        name={'dr. Lenny Puspitasari'}
        desc={'Wanita'}
        onPress={() => navigation.navigate('ChattingScreen')}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
