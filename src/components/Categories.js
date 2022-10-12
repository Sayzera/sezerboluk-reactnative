import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, selectCategories } from '../redux/mainSlice';
const Categories = ({ all }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View className="mt-5">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories.categories}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <CategoryItem data={item} index={index} all={all} />
        )}
      />
    </View>
  );
};

export default Categories;
