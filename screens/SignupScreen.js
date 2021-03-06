
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Display} from '../utils';
import Feather from 'react-native-vector-icons/Feather';

import LottieView from 'lottie-react-native';



import Separator from '../components/Separator';

import Colors from '../constants/Colors';
import Images from '../constants/Images';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { showMessage } from "react-native-flash-message";

const SigninScreen = ({navigation}) => {

    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [emailState, setEmailState] = useState('default');
    const [usernameState, setUsernameState] = useState('default');

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

    const inputStyle = state => {
        switch (state) {
          case 'valid':
            return {
              ...styles.inputContainer,
              borderWidth: 1,
              borderColor: Colors.SECONDARY_GREEN,
            };
          case 'invalid':
            return {
              ...styles.inputContainer,
              borderWidth: 1,
              borderColor: Colors.DEFAULT_RED,
            };
          default:
            return styles.inputContainer;
        }
      };

const showMarker = state => {
    switch (state) {
      case 'valid':
        return (
          <AntDesign
            name="checkcircleo"
            color={Colors.SECONDARY_GREEN}
            size={18}
            style={{marginLeft: 5}}
          />
        );
      case 'invalid':
        return (
          <AntDesign
            name="closecircleo"
            color={Colors.DEFAULT_RED}
            size={18}
            style={{marginLeft: 5}}
          />
        );
      default:
        return null;
    }
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

    return(
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
          <Text style={styles.headerTitle}>Sign Up</Text>
        </View> */}
        <View style={{alignItems:'center'}}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.content}>
          Entrez votre email, choisissez un nom d'utilisateur et un mot de passe
          </Text>
        </View>
        <View style={inputStyle(usernameState)}>

          <View style={styles.inputSubContainer}>
            <Feather
              name="user"
              size={22}
              color={Colors.DEFAULT_GREY}
              style={{marginRight: 10}}
            />
            <TextInput
              autoCorrect={false}
              placeholder="Username"
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              style={styles.inputText}
              onChangeText={text => setUsername(text)}
            //   onEndEditing={({nativeEvent: {text}}) =>
            //     checkUserExist('username', text)
            //   }
            />
            {showMarker(usernameState)}
          </View>
        </View>
        <Text style={styles.errorMessage}>{usernameErrorMessage}</Text>
        <View style={inputStyle(emailState)}>

          <View style={styles.inputSubContainer}>
            <Feather
              name="mail"
              size={22}
              color={Colors.DEFAULT_GREY}
              style={{marginRight: 10}}
            />
            <TextInput
              placeholder="Email"
              autoCorrect={false}
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              style={styles.inputText}
              onChangeText={text => setEmail(text)}
            //   onEndEditing={({nativeEvent: {text}}) =>
            //     checkUserExist('email', text)
            //   }
            />
            {showMarker(emailState)}
          </View>
        </View>
        <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <Feather
              name="lock"
              size={22}
              color={Colors.DEFAULT_GREY}
              style={{marginRight: 10}}
            />
            <TextInput
              secureTextEntry={isPasswordShow ? false : true}
              placeholder="Password"
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              style={styles.inputText}
              onChangeText={text => setPassword(text)}
            />
            <Feather
              name={isPasswordShow ? 'eye' : 'eye-off'}
              size={22}
              color={Colors.DEFAULT_GREY}
              style={{marginRight: 10}}
              onPress={() => setIsPasswordShow(!isPasswordShow)}
            />
          </View>
        </View>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TouchableOpacity style={styles.signinButton} onPress={()=>navigation.navigate('RegisterPhoneScreen',{username:username})}>
          {isLoading ? (
            <LottieView source={Images.LOADING} autoPlay />
          ) : (
            <Text style={styles.signinButtonText}>Créer un compte</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity style={styles.facebookButton}>
          <View style={styles.socialButtonsContainer}>
            <View style={styles.signinButtonLogoContainer}>
              <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
            </View>
            <Text style={styles.socialSigninButtonText}>
            Connectez-vous avec Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.socialButtonsContainer}>
            <View style={styles.signinButtonLogoContainer}>
              <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
            </View>
            <Text style={styles.socialSigninButtonText}>Connectez-vous avec Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}   

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
      color:"#fff"
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
      color:"#fff"
    },
    inputContainer: {
      backgroundColor: "#373538",
      paddingHorizontal: 10,
      marginHorizontal: 20,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: Colors.LIGHT_GREY2,
      justifyContent: 'center',
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
      color: "#fff",
      flex: 1,
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
      color: "white",
      fontFamily: 'Poppins-Medium',
    },
    orText: {
      fontSize: 15,
      lineHeight: 15 * 1.4,
      color: Colors.DEFAULT_BLACK,
      fontFamily: 'Poppins-Medium',
      marginLeft: 5,
      alignSelf: 'center',
      marginTop: 20,
    },
    facebookButton: {
      backgroundColor: Colors.FABEBOOK_BLUE,
      paddingVertical: 15,
      marginHorizontal: 20,
      borderRadius: 8,
      marginVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    googleButton: {
      backgroundColor: Colors.GOOGLE_BLUE,
      paddingVertical: 15,
      marginHorizontal: 20,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialButtonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    socialSigninButtonText: {
      color: "white",
      fontSize: 13,
      lineHeight: 13 * 1.4,
      fontFamily: 'Poppins-Medium',
    },
    signinButtonLogoContainer: {
      backgroundColor: Colors.DEFAULT_WHITE,
      padding: 2,
      borderRadius: 3,
      position: 'absolute',
      left: 25,
    },
    signinButtonLogo: {
      height: 18,
      width: 18,
    },
    errorMessage: {
      fontSize: 10,
      lineHeight: 10 * 1.4,
      color: Colors.DEFAULT_RED,
      fontFamily: 'Poppins-Medium',
      marginHorizontal: 20,
      marginVertical: 3,
    },
  });

export default SigninScreen;