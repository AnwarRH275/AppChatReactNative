import React, {useState, useRef} from 'react';


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

import { showMessage } from "react-native-flash-message";

import PhoneInput from 'react-native-phone-input'


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






const StartAppel = ({navigation, name, setName, roomId, setRoomId, joinRoom }) => {

  
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const [phoneNumber, setPhoneNumber] = useState('');
 
  const phoneInput = useRef(null);
  
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

  const addContact = () => {
    console.log("name, roomId");
    console.log(name, roomId);
    if (name !== '' && roomId !== '') {
      
      showMessage({
        message: "Contact Ajouter",
        description: name+" a été ajouté",
        type: "success",
      });
      navigation.navigate('Home');
    }
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
      <Text style={styles.title}>M _ K _ S</Text>
      <Text style={styles.content}>
      Entrez votre nom d'utilisateur et le numéro de téléphone
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
          onChangeText={text => setName(text)}
        />
      </View>
      </View>
      <Separator height={15} />
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
                  setRoomId(value);
                  console.log(value);
                }}

                containerStyle={styles.inputText}
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />

      </View>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <View style={styles.forgotPasswordContainer}>
   
      
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
        <Text style={styles.signinButtonText} onPress={addContact}>Ajouter</Text>
      )}
      </TouchableOpacity>
      
    
      </SafeAreaView>
      </View>



    // <View style={styles.startMeetingContainer}>
    //   <View style={styles.info}>
    //     <TextInput
    //       style={styles.textInput}
    //       value={name}
    //       placeholder="Enter name"
    //       placeholderTextColor="#767476"
    //       onChangeText={(text) => setName(text)}
    //     />
    //   </View>
    //   <View style={styles.info}>
    //     <TextInput
    //       style={styles.textInput}
    //       value={roomId}
    //       placeholder="Enter number phone"
    //       placeholderTextColor="#767476"
    //       onChangeText={(text) => setRoomId(text)}
    //       keyboardType="numeric"
    //     />
    //   </View>
    //   <View
    //     style={{
    //       alignItems: "center",
    //     }}
    //   >
    //     <TouchableOpacity style={styles.startMeetingButton} onPress={addContact}>
    //       <Text
    //         style={{
    //           color: "white",
    //           fontWeight: "bold",
    //         }}
    //       >
    //         Ajouter
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
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
    color: "#fff",
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
    color: "#fff",
  },
  inputContainer: {
    height: Display.setHeight(6),
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
    color: "#fff",
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
    color: "#fff",
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
    color: "#fff",
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

// const styles = StyleSheet.create({
//   info: {
//     width: "100%",
//     backgroundColor: "#373538",
//     height: 50,
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: "#484648",
//     padding: 12,
//     justifyContent: "center",
//   },
//   textInput: {
//     color: "white",
//     fontSize: 15,
//   },
//   startMeetingButton: {
//     width: 350,
//     marginTop: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "green",
//     height: 50,
//     borderRadius: 15,
//   },
// });

export default StartAppel