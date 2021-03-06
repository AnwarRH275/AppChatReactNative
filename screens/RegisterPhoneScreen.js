
import React, {useState, useRef} from 'react';
 
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Separator from '../components/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import {Display} from '../utils';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import PhoneInput from 'react-native-phone-input'


const RegisterPhoneScreen = ({navigation,route}) => {

  const [phoneNumber, setPhoneNumber] = useState('');
 
  const phoneInput = useRef(null);
  const  {username}  = route.params;
  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };

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
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.DEFAULT_WHITE}
          translucent
        />
        <Separator height={StatusBar.currentHeight} />
        {/* <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Forgot Password</Text>
        </View> */}
        <Text style={styles.title}>Inscrire un téléphone</Text>
        <Text style={styles.content}>
        Entrez votre numéro de téléphone enregistré pour vous connecter. 
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
    

        <PhoneInput
                ref={phoneInput}
                autoFormat={true}
                offset={10}
                initialCountry={'ma'}
                defaultValue={phoneNumber}
                textStyle={{ color:"#fff"}}
                flagStyle={{width: 35, height: 25, borderWidth:0}}
                onChangePhoneNumber={(value,iso2) => {
                  setPhoneNumber(value);
                  console.log(value);
                }}

                containerStyle={styles.inputText}
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />

          </View>
        </View>
        <TouchableOpacity style={styles.signinButton} onPress={()=> navigation.navigate('VerificationScreen',{phoneNumber:phoneNumber,username:username})}>
          <Text style={styles.signinButtonText}>Continuez</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: 'Poppins-Medium',
      lineHeight: 20 * 1.4,
      width: Display.setWidth(80),
      textAlign: 'center',
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#efefef",
        alignSelf: "center",
  

      fontFamily: 'Poppins-Medium',
      lineHeight: 20 * 1.4,
      marginTop: 50,
      marginBottom: 10,
      marginHorizontal: 20,
    },
    content: {
        textAlign: "center",
        color: "#b5b5b5",
        fontSize: 15,
        paddingHorizontal: 30,
     
      fontFamily: 'Poppins-Medium',
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 20,
    },
    inputContainer: {
      backgroundColor: "#373538",
      paddingHorizontal: 10,
      marginHorizontal: 20,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: Colors.LIGHT_GREY2,
      justifyContent: 'center',
      fontSize: 18,
      textAlignVertical: 'center',
      padding: 0,
      height: Display.setHeight(6),
    },
    inputSubContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputText: {
      fontSize: 18,
      textAlignVertical: 'center',
      padding: 0,
      height: Display.setHeight(6),
      color: Colors.DEFAULT_BLACK,
      flex: 1,
      color:"#fff"
    },
    signinButton: {
      backgroundColor: Colors.DEFAULT_GREEN,
      borderRadius: 8,
      marginHorizontal: 20,
      height: Display.setHeight(6),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    signinButtonText: {
      fontSize: 18,
      lineHeight: 18 * 1.4,
      color: "#fff",
      fontFamily: 'Poppins-Medium',
    },
  });
  
  export default RegisterPhoneScreen;