import React from "react";

import ContactMenu from '../components/ContactMenu';
import SearchBar from '../components/SearchBar';
import {View,SafeAreaView,StyleSheet,ScrollView} from 'react-native'

const Call = ({navigation}) => {

    
    return (
    <View style={styles.container}>
        <SafeAreaView style={{height:"100%"}}>
            <ScrollView>
                <SearchBar/> 
               
                <ContactMenu navigation={navigation}/>
            </ScrollView>  
         </SafeAreaView>
     </View>
    );
    };
    const styles=StyleSheet.create({
        container:{
            backgroundColor:"#1c1c1c",
            padding:15
        }
    })
export default Call;