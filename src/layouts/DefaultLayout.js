import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import { Card } from 'react-native-paper';
import Header from '../components/Header';
import Back from '../components/Back';

const DefaultLayout = ({
  children,
  header = true,
  search = true,
  categories = true,
  back = false,
}) => {
  return (
    <SafeAreaView>
      <View className="px-2">
        {back && <Back />}
        {header && <Header />}

        {search && categories && (
          <Card className="p-3">
            {search && <Search />}
            {categories && <Categories />}
          </Card>
        )}

        {children}
      </View>
    </SafeAreaView>
  );
};

export default DefaultLayout;
