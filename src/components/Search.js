import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Card, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { getProductsWithSearch } from '../redux/mainSlice';

const Search = () => {
  const [searchShow, setSearchShow] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <View>
      <View className="flex flex-row justify-between">
        <Text className="text-xl italic font-bold  text-[#7854e3]">
          UPayments Store
        </Text>
        <AntDesign
          onPress={() => setSearchShow((prev) => !prev)}
          name="search1"
          size={30}
          color="#7854e3"
        />
      </View>

      {searchShow && (
        <View className="mt-2">
          <TextInput
            mode="outlined"
            label={'Search'}
            onChangeText={(text) => {
              dispatch(getProductsWithSearch({ search: text }));
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Search;
