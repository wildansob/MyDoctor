import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ListDoctor from '../../components/molecules/ListDoctor/ListDoctor';
import {colors, fonts} from '../../utils';
import {
  DummyDoctor10,
  DummyDoctor7,
  DummyDoctor9,
  DummyHospital1,
} from '../../assets';

const MessagesScreen = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      image: DummyDoctor7,
      name: 'dr. Anita',
      desc: 'Baik ibu, Terima kasih banyak atas waktu... ',
    },
    {
      id: 2,
      image: DummyDoctor9,
      name: 'dr. Citra',
      desc: 'Baik ibu, Terima kasih banyak atas waktu... ',
    },
    {
      id: 3,
      image: DummyDoctor10,
      name: 'dr. Adib',
      desc: 'Baik ibu, Terima kasih banyak atas waktu... ',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <ListDoctor
              key={doctor.id}
              image={doctor.image}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
