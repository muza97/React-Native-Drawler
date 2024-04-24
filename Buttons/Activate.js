// components/Activate.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';

export default function Activate({ onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} className="bg-green-500 rounded-full">
  <Text className="text-white font-bold">Go Online</Text>
</TouchableOpacity>

    </View>
  );
}
