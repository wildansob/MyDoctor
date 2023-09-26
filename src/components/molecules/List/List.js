import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {
  DummyDoctor4,
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconNext,
  IconRate,
} from '../../../assets';

const List = ({image, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'languange') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={image} style={styles.avatar} />}
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
  wrapper: {
    flex: 1,
    marginLeft: 16,
  },
});
