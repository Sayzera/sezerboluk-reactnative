import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Back = () => {
  const { goBack } = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
      >
        <Ionicons name="return-down-back" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Back;
