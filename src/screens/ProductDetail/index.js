import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWithId, selectProductDetails } from '../../redux/mainSlice';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const DetailScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { id } = route.params;
  const product = useSelector(selectProductDetails);

  useEffect(() => {
    dispatch(
      getProductWithId({
        id,
      })
    );
  }, [id]);

  return (
    <DefaultLayout categories={false} search={false} back={true}>
      <Card className="p-5">
        <Card.Content></Card.Content>
        <Card.Cover source={{ uri: product?.product?.avatar }} />
        <View className="flex-row justify-between items-center">
          <Title className="w-9/12">{product?.product?.name}</Title>
          <Text className="text-xl font-bold w-3/12 text-center underline">
            ${product?.product?.price}
          </Text>
        </View>
        <Paragraph>{product?.product?.description}</Paragraph>
      </Card>
    </DefaultLayout>
  );
};

export default DetailScreen;
