import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {Restart} from 'fiction-expo-restart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ToggleButton from '../components/ToggleButton';
import LottieView from 'lottie-react-native';
import Separator from '../components/Separator';
//import {useDispatch, useSelector} from 'react-redux';
import {Display} from '../utils';
import Colors from '../constants/Colors';

import Images from '../constants/Images';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const SigninScreen = ({navigation}) => {

    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


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
            <SafeAreaView style={{height:"100%"}}>
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
          onPress={() => Restart()}
        />
        <Text style={styles.headerTitle}>S'identifier</Text>
      </View> */}
      <Text style={styles.title}>Bienvenue</Text>
      <Text style={styles.content}>
      Entrez votre nom d'utilisateur et votre mot de passe et profitez de MKS
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            onChangeText={text => setUsername(text)}
          />
        </View>
      </View>
      <Separator height={15} />
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
      <View style={styles.forgotPasswordContainer}>
        <View style={styles.toggleContainer}>
          <ToggleButton size={0.5} />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <Text
          style={styles.forgotPasswordText}
          //onPress={() => navigation.navigate('ForgotPassword')}
          >
          Mot de passe oublié
        </Text>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        //onPress={() => signIn()}
        activeOpacity={0.8}>
        {isLoading ? (
          <LottieView 
          source={Images.LOADING} 
          autoPlay />
        ) : (
          <Text style={styles.signinButtonText}>Sign In</Text>
        )}
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <TouchableOpacity>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('SignupScreen')}
          >
         S'inscrire
        </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.orText}>Où</Text>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image 
            source={Images.FACEBOOK} 
            style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>
          Connecter avec Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image 
            source={Images.GOOGLE} 
            style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>Connectez-vous avec Google</Text>
        </View>
      </TouchableOpacity>
      </SafeAreaView>
    </View>

    )
};

export default SigninScreen;



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
      fontSize: 20,
      fontFamily: 'Poppins-Medium',
      lineHeight: 20 * 1.4,
      marginTop: 50,
      marginBottom: 10,
      marginHorizontal: 20,
    },
    content: {
      fontSize: 20,
      fontFamily: 'Poppins-Medium',
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 20,
    },
    inputContainer: {
      backgroundColor: Colors.LIGHT_GREY,
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
      color: Colors.DEFAULT_BLACK,
      flex: 1,
    },
    forgotPasswordContainer: {
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rememberMeText: {
      marginLeft: 10,
      fontSize: 12,
      lineHeight: 12 * 1.4,
      color: Colors.DEFAULT_GREY,
      fontFamily: 'Poppins-Medium',
    },
    forgotPasswordText: {
      fontSize: 12,
      lineHeight: 12 * 1.4,
     color: Colors.DEFAULT_GREEN,
      fontFamily: 'Poppins-Bold',
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
      color: Colors.DEFAULT_WHITE,
      fontFamily: 'Poppins-Medium',
    },
    signupContainer: {
      marginHorizontal: 20,
      justifyContent: 'center',
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    accountText: {
      fontSize: 13,
      lineHeight: 13 * 1.4,
      color: Colors.DEFAULT_BLACK,
     fontFamily: 'Poppins-Medium',
    },
    signupText: {
      fontSize: 13,
      lineHeight: 13 * 1.4,
      color: Colors.DEFAULT_GREEN,
      fontFamily: 'Poppins-Medium',
      marginLeft: 5,
    },
    orText: {
      fontSize: 15,
      lineHeight: 15 * 1.4,
      color: Colors.DEFAULT_BLACK,
     fontFamily: 'Poppins-Medium',
      marginLeft: 5,
      alignSelf: 'center',
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
    signinButtonLogo: {
      height: 18,
      width: 18,
    },
    signinButtonLogoContainer: {
      backgroundColor: Colors.DEFAULT_WHITE,
      padding: 2,
      borderRadius: 3,
      position: 'absolute',
      left: 25,
    },
    socialButtonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    socialSigninButtonText: {
      color: Colors.DEFAULT_WHITE,
      fontSize: 13,
      lineHeight: 13 * 1.4,
     fontFamily: 'Poppins-Medium',
    },
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    errorMessage: {
      fontSize: 10,
      lineHeight: 10 * 1.4,
      color: Colors.DEFAULT_RED,
     fontFamily: 'Poppins-Medium',
      marginHorizontal: 20,
      marginTop: 3,
      marginBottom: 10,
    },
  });