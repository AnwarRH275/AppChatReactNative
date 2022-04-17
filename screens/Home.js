import React,{useState} from 'react';
import {View,SafeAreaView,StyleSheet,ScrollView} from 'react-native'
import ContactMenu from '../components/ContactMenu';
import Header from '../components/Header';
import MenuButton from '../components/MenuButton';
import SearchBar from '../components/SearchBar';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFonts = () => {
    return Font.loadAsync({
      'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
      
      'Kufam-SemiBoldItalic': require('../assets/fonts/Kufam-SemiBoldItalic.ttf'),
      'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
      'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    });
  };
  

function Home({navigation}) {

    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
      return (
        <AppLoading 
        startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            onError={console.warn}
        />
      );
    }
  
  return (
    <View style={styles.container}>
        <SafeAreaView style={{height:"100%"}}>
        {/* header */}
            <Header/>
        {/* searchbar */}
            <SearchBar/> 
        <ScrollView>
            {/* menuButton */}
                <MenuButton navigation={navigation}/>

            {/*  contact */}

            <ContactMenu/>
         </ScrollView>  
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
