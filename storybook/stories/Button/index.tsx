import React from 'react';
import { TouchableHighlight } from 'react-native';

interface Props {
  onPress: any;
  children: any;
}

export default function Button({ onPress, children }: Props) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}
