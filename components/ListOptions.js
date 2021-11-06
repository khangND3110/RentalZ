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

const optionsList = [
    {title: 'TPHCM', img: require('../assets/apartment1.jpg')},
    {title: 'Da Nang', img: require('../assets/apartment2.jpg')},
    {title: 'Da Lat', img: require('../assets/apartment2.jpg')},
    {title: 'Nha trang', img: require('../assets/apartment2.jpg')},
    
  ];
const Destination = (option) => {
  return (
  <Pressable >
    <View>
      <View style={style.optionListsContainer}>
          {optionsList.map((option, index) => (
            <View style={style.optionsCard} key={index}>
              {/* Apartment image */}
              <Image source={option.img} style={style.optionsCardImage} />

              {/* Option title */}
              <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                {option.title}
              </Text>
            </View>
          ))}
      </View>        

    </View>
  </Pressable>  
  )

}

export default function ListOptions() {
  return (
    <View>
      <View>
          <Text style={{color: COLORS.dark, fontSize: 18, fontWeight: 'bold', paddingTop: 30,
        paddingHorizontal: 30}}>
          Explore destination
          </Text>
      </View>  
      <FlatList
      snapToInterval={width - 30}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingVertical: 20}}
      horizontal
      data={optionsList}
      renderItem={({item}) => <Destination optionsList={item} />}
      />
    </View>

)

}

const style = StyleSheet.create({
    optionsCard: {
        height: 170,
        width: width / 2 - 30,
        elevation: 15,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
        marginHorizontal: 7,
      },
      optionsCardImage: {
        height: 120,
        borderRadius: 10,
        width: '100%',
      },
      optionListsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        paddingHorizontal: 15,

      },
})