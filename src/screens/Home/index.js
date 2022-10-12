import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import Products from '../../components/Products';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrentCategory } from '../../redux/mainSlice';

const Home = () => {
  const { addListener } = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      dispatch(setCurrentCategory('All'));
    });
    return unsubscribe;
  });
  return (
    <DefaultLayout>
      <Products />
    </DefaultLayout>
  );
};

export default Home;
