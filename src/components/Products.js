import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, selectProducts } from '../redux/mainSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
    console.log('=products=', products);
  }, []);

  return (
    <View className="mt-4">
      <FlatList
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={100}
        initialNumToRender={10}
        numColumns={2}
        ItemSeparatorComponent={() => (
          <View className="border my-3 border-gray-400" />
        )}
        contentInset={{
          bottom: 1000,
        }}
        keyExtractor={(item) => item._id}
        data={products.products}
        renderItem={({ item }) => <ProductItem data={item} />}
      />
    </View>
  );
};

export default Products;
