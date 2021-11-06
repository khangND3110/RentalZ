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
import apartmentdata from '../public/apartmentdata';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialIcons';


const {width} = Dimensions.get('screen');

const CardItem = ({apartment}) => {
    return (
      <Pressable>
        <View style={style.card}>
          {/* House image */}
          <Image source={apartment.image} style={style.cardImage} />
          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {apartment.title}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: COLORS.blue, fontSize: 16}}>
                $1,500
              </Text>
            </View>

            {/* Location text */}

            <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
              {apartment.location}
            </Text>

            {/* Facilities container */}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={style.facility}>
              <Ionicons name="bed" size={20} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
              <Icon name="bathtub" size={20} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
              <Icon name="aspect-ratio" size={20} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
};

export default function Card() {
    return (
        <FlatList
        snapToInterval={width - 20}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
        horizontal
        data={apartmentdata}
        renderItem={({item}) => <CardItem apartment={item}/>}
        />
    )

}

const style = StyleSheet.create({
    card: {
        height: 245,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
      },
      cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,
      },
      facility: {flexDirection: 'row', marginRight: 15},
      facilityText: {marginLeft: 5, color: COLORS.grey},
})
