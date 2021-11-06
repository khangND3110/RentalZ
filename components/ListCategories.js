import React from 'react'
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
  } from 'react-native';
import COLORS from '../consts/colors';
const {width} = Dimensions.get('screen');

const categoryList = ['House', 'Apartment', 'Villa'];

export default function ListCategories() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return ( 
    <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
  
    </View>
    )
}

const style = StyleSheet.create({
    categoryListText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.grey,
      },
      activeCategoryListText: {
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5,
      },
      categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 40,
      },
})
