import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import COLORS from '../consts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar() {
    return (
        <View style={{ margintop: 5, flexDirection: "row"}}> 
            <GooglePlacesAutocomplete 
            placeholder="Search address, city, location"
            styles={{
                textInput: {
                    backgroundColor: "#eee",
                    borderRadius: 20,
                    fontWeight: "700",             
                },
                textInputContainer: {
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 20,

                }
            }} 

            renderLeftButton ={() =>(
                <View style={{marginLeft: 10}}>
                    <Ionicons name="location-sharp" size={24} />
                </View>
            )}
            renderRightButton={() => (
                <View style={{marginRight: 10}}>
                  <Ionicons name="search" size={28} />
                </View>                   
            )}
            />
        </View>
    )
}

