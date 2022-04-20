import React, {useRef, useState} from 'react';
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
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import {Display} from '../utils';
import { showMessage } from "react-native-flash-message";

const VerificationScreen = ({navigation,route}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

  
    const  {phoneNumber,username}  = route.params;



    const bienvenue = () => {
        if (username !== '') {
          
          showMessage({
            message: "Bienvenue "+username,
            description: "Vous pouvez naviguer dans l'application en tout sécurité",
            type: "success",
          });
          navigation.navigate('Home',{userToken:2});
        }
      }
  
  const fetchFonts = () => {
    return Font.loadAsync({
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      
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
    console.log(phoneNumber)
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
        <Text style={styles.headerTitle}>Vérification OTP</Text>
      </View> */}
      <Text style={styles.title}>Vérification OTP</Text>
      <Text style={styles.content}>
      Entrez le numéro OTP vient de vous envoyer à{' '}
        <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
      </Text>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={bienvenue}>
        <Text style={styles.signinButtonText}>Vérifier</Text>
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
  phoneNumberText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_YELLOW,
  },
  otpContainer: {
   
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    backgroundColor:"#373538",
    borderRadius: 5,
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: "#fff",
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
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

export default VerificationScreen;