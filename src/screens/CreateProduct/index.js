import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import { Avatar, Button, TextInput, Title } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { config } from '../../utils/config';
import Categories from '../../components/Categories';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProduct,
  selectCurrentCategoryName,
  selectProductCreated,
  setCurrentCategory,
  setCurrentCategoryName,
  setProductCreated,
} from '../../redux/mainSlice';

const CreateProduct = ({ route }) => {
  const currentCategoryName = useSelector(selectCurrentCategoryName);
  const { navigate, addListener } = useNavigation();
  const [categoryErrorMessage, setCategoryErrorMessage] = React.useState(false);
  const isCreateProduct = useSelector(selectProductCreated);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      price: '',
      category: '',
      description: '',
      avatar: '',
      developerEmail: config.email,
    },
  });

  useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      dispatch(setCurrentCategory('All'));
      dispatch(setCurrentCategoryName('All'));
      dispatch(setProductCreated(''));
    });

    if (isCreateProduct) {
      reset({
        name: '',
        price: '',
        category: '',
        description: '',
        avatar: '',
        developerEmail: config.email,
      });
      dispatch(setCurrentCategory('All'));
      dispatch(setCurrentCategoryName('All'));
    }
    return unsubscribe;
  }, [isCreateProduct]);

  const onSubmit = (data) => {
    if (currentCategoryName == 'All') {
      setCategoryErrorMessage('Please select a category');
      return;
    } else {
      setCategoryErrorMessage(false);
    }

    let formData = { ...data, category: currentCategoryName };

    createProduct(formData)(dispatch);
  };
  return (
    <DefaultLayout categories={false} search={false} back={true}>
      <View className="mb-5">
        <Text className="text-xl underline text-center">Create Product</Text>
      </View>

      {/* Alert */}

      {isCreateProduct == true ? (
        <View className="mb-5">
          <Text className="text-xl text-center text-green-500">
            Product created successfully
          </Text>
        </View>
      ) : null}

      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mode="outlined"
              label={'Product Title'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name?.type == 'required' && (
          <Text className="text-red-500">This is required.</Text>
        )}
      </View>

      <View className="mt-2">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mode="outlined"
              label={'Price'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="price"
        />

        {errors.Price && (
          <Text className="text-red-500">This is required.</Text>
        )}
      </View>

      <View className="mt-2">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mode="outlined"
              label={'Description'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline={true}
              numberOfLines={4}
            />
          )}
          name="description"
        />

        {errors.description && (
          <Text className="text-red-500">This is required.</Text>
        )}
      </View>

      <View className="mt-2">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mode="outlined"
              label={'Image Link'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline={true}
              numberOfLines={4}
            />
          )}
          name="avatar"
        />

        {errors.avatar && (
          <Text className="text-red-500">This is required.</Text>
        )}
      </View>
      <View className="border pb-5 pr-4 mt-2 rounded border-gray-400">
        <Text className="m-1 text-xl text-gray-500">Selected Category:</Text>
        <Categories all={true} />
        {categoryErrorMessage && (
          <Text className="text-red-500">{categoryErrorMessage}</Text>
        )}
      </View>

      <View className="mt-6">
        <TouchableOpacity
          onPress={() => {
            handleSubmit(onSubmit)();
          }}
        >
          <Button mode="contained" className="rounded-none py-2">
            Add Product
          </Button>
        </TouchableOpacity>
      </View>
    </DefaultLayout>
  );
};

export default CreateProduct;
