import { View, Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ProductItem = ({ data }) => {
  const { navigate } = useNavigation();

  return (
    <View className="mr-2 w-1/2">
      <Card>
        <TouchableOpacity onPress={() => navigate('Detail', { id: data._id })}>
          <Card.Cover source={{ uri: data.avatar }} />
          <Card.Content className="h-28 ">
            <Title>{data.name}</Title>
          </Card.Content>
        </TouchableOpacity>
        <View className="flex flex-row justify-between items-center px-4 bg-gray-300 ">
          <Text className="text-xl"> ${data.price}</Text>
          <View>
            <TouchableOpacity>
              <Fontisto name="shopping-basket-add" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default memo(ProductItem);
