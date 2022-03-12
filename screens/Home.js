import React from 'react';
import {View,SafeAreaView,StyleSheet} from 'react-native'
import ContactMenu from '../components/ContactMenu';
import Header from '../components/Header';
import MenuButton from '../components/MenuButton';
import SearchBar from '../components/SearchBar';



function Home({navigation}) {
  return (
    <View style={styles.container}>
        <SafeAreaView style={{height:"100%"}}>
        {/* header */}
            <Header/>
        {/* searchbar */}
            <SearchBar/> 
        {/* menuButton */}
            <MenuButton navigation={navigation}/>

         {/*  contact */}

         <ContactMenu/>
             
         </SafeAreaView>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#1c1c1c",
        padding:15
    }
})

export default Home;