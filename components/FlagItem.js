import React,{useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Colors from '../constants/Colors';
import {StaticImageService} from '../services';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


const FlagItem = ({code, name, dial_code, onPress}) => {

    const fetchFonts = () => {
        return Font.loadAsync({
          'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
          'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
          
          
        });
      };
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
        <TouchableOpacity
          style={styles.container}
          onPress={() => onPress({code, name, dial_code})}>
          <Image
            style={styles.flagImage}
            source={{uri: StaticImageService.getFlagIcon(code)}}
          />
          <Text style={styles.flagText}>{dial_code}</Text>
          <Text style={styles.flagText}>{name}</Text>
        </TouchableOpacity>
      );

}



const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    flagImage: {
      height: 25,
      width: 25,
      marginRight: 10,
    },
    flagText: {
      fontSize: 14,
      lineHeight: 14 * 1.4,
      color: Colors.DEFAULT_BLACK,
      fontFamily: 'Poppins-Medium',
      marginRight: 10,
    },
  });
  
export default FlagItem;