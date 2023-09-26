import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DummyUser, IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.borderProfile}>
          <Image source={DummyUser} style={styles.avatar} />
          {!name && <IconRemovePhoto style={styles.iconRemove} />}
        </View>
      </TouchableOpacity>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center'
  },
  profession: {
    fontSize: 16,
    textAlign: 'center'
  },
  iconRemove: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
