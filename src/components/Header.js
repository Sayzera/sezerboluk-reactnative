import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { assets } from '../assets';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const { navigate } = useNavigation();
  return (
    <View className="my-2 mb-5">
      <View className="flex flex-row justify-between bg-[#9a44db] p-2 rounded">
        <View>
          <Image source={assets.logo} />
        </View>
        <View className="flex flex-row space-x-5 items-center">
          <SimpleLineIcons name="basket" size={30} color="white" />
          <MaterialIcons name="login" size={30} color="white" />
          <TouchableOpacity onPress={() => navigate('CreateProduct')}>
            <MaterialIcons name="add-business" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
