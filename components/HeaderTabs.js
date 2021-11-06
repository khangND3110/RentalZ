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

export default function HeaderTabs() {
    return (
    <View style={style.header}>
        <View>
          <Text style={{color: COLORS.dark, fontSize: 20, fontWeight: 'bold'}}>
           RentalZ
          </Text>
        </View>
        <Image
          style={style.profileImage}
          source={require('../assets/person.jpg')}
        />
    </View>
    )
}
const style = StyleSheet.create({
    header: {
      backgroundColor: COLORS.white,
      paddingVertical: 35,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    profileImage: {
      height: 50,
      width: 50,
      borderRadius: 25,
    }
});