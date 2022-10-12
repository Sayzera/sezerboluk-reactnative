import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentCategoryName,
  getProductsWithCategory,
  selectCurrentCategory,
  setCurrentCategory,
} from '../redux/mainSlice';

const CategoryItem = ({ data, index, all }) => {
  const dispatch = useDispatch();
  const normalColor = 'border-[#9a44db] bg-[#9a44db]';
  const activeColor = 'border-[#9a44db] bg-[#56e29e]';

  const currentCategory = useSelector(selectCurrentCategory);

  return (
    <>
      {index === 0 && all != true ? (
        <View className="ml-4 border border-[#2878ba] p-3 rounded bg-[#2878ba]">
          <TouchableOpacity
            onPress={() => {
              dispatch(setCurrentCategory('All'));
              dispatch(setCurrentCategoryName('All'));
              dispatch(
                getProductsWithCategory({
                  category_name: false,
                })
              );
            }}
          >
            <Text className="text-white text-md font-bold">All</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}
      <View
        className={`ml-4 border  p-3 rounded  ${
          currentCategory == data._id ? activeColor : normalColor
        }  `}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(setCurrentCategory(data._id));
            dispatch(setCurrentCategoryName(data.name));
            dispatch(
              getProductsWithCategory({
                category_name: data.name,
              })
            );
          }}
        >
          <Text className="text-white text-md font-bold">{data.name}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CategoryItem;
