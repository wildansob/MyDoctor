import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IsMe from './IsMe';
import Other from './Other';

const ChatBubble = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatBubble;
