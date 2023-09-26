import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HomeProfileComponent from '../../components/molecules/HomeProfile/HomeProfileComponent';
import DoctorCategory from '../../components/molecules/DoctorCategory/DoctorCategory';
import RatedDoctor from '../../components/molecules/RatedDoctor/RatedDoctor';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';
import {colors, fonts} from '../../utils';
import Gap from '../../components/atoms/Gap/Gap';
import {
  DummyDoctor1,
  DummyDoctor10,
  DummyDoctor2,
  DummyDoctor3,
  DummyNews1,
  DummyNews2,
  DummyNews3,
  IconHospitals,
  JSONCategoryDoctor,
} from '../../assets';

const DoctorScreen = ({navigation}) => {
  const [topDoctors, setTopDoctors] = useState([
    {
      id: 1,
      image: DummyDoctor1,
      name: 'dr. Patricia',
      spesialis: 'Bedah Umum',
    },
    {
      id: 2,
      image: DummyDoctor2,
      name: 'dr. Agus Thosin',
      spesialis: 'Bedah Jantung',
    },
    {
      id: 3,
      image: DummyDoctor10,
      name: 'dr. Adib',
      spesialis: 'Dokter Umum',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfileComponent
              onPress={() => navigation.navigate('UserProfile')}
            />
            <Text style={styles.welcome}>
              Mau konsultasi dengan dokter siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCategoryDoctor.data.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
            <Gap height={12} />
            {topDoctors.map(topDoctor => {
              return (
                <RatedDoctor
                  image={topDoctor.image}
                  name={topDoctor.name}
                  spesialis={topDoctor.spesialis}
                  key={topDoctor.id}
                  onPress={() => navigation.navigate('DoctorProfile')}
                />
              );
            })}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem
            title={'Is it safe to stay at home during corona virus?'}
            image={DummyNews1}
          />
          <NewsItem
            title={'Consume yellow citrus helps you healthier'}
            image={DummyNews2}
          />
          <NewsItem
            title={'Learn how to make a proper orange juice at home'}
            image={DummyNews3}
          />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorScreen;

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
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
});
