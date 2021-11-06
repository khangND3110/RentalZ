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
import HeaderTabs from "../components/HeaderTabs"
import SearchBar from '../components/SearchBar';
import ListOptions from '../components/ListOptions';
import ListCategories from '../components/ListCategories';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Card from '../components/Card';
import BottomTabs from '../components/BottomTabs';

export default function Home({navigation}) {
    return (
        <SafeAreaView>
            <View  > 
                 <HeaderTabs />
                 <SearchBar />
                 <ListOptions />            
            </View>
            <ScrollView showsVerticalScrollIndicator ={false}>
                 <ListCategories />
                 <Card navigation={navigation}/> 
            </ScrollView>
                <Divider width={1} />
                <BottomTabs />

        </SafeAreaView>
    );
}
