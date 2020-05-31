import React, {useState, useEffect} from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
  } from 'react-native';



  
export default function Success2({ navigation, route }) {
    const { item } = route.params;

    return (
        <View style={{backgroundColor:"green"}}>
            
        <Text style={{fontSize: 30, flex: 1, justifyContent: 'center', alignItems: 'center'}}>Thank You!!</Text>   
            
        </View>
    
    );
}