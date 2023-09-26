import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/Header';
import ChatBubble from '../../components/molecules/ChatBubble/ChatBubble';
import InputChat from '../../components/molecules/InputChat/InputChat';
import {colors, fonts} from '../../utils';
import IsMe from '../../components/molecules/ChatBubble/IsMe';

const ChattingScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack()}
        type={'dark-profile'}
      />
      <View style={styles.container}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatBubble isMe />
        <ChatBubble />
        <ChatBubble isMe />
      </View>
      <InputChat />
    </View>
  );
};

export default ChattingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
