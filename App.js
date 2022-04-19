import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Navigation from './navigation/Navigation';
import AppIntroSlider from 'react-native-app-intro-slider';
import React,{useState} from "react";
import 'react-native-gesture-handler'; 

import FlashMessage from "react-native-flash-message";
import SigninScreen from './screens/SigninScreen';


const slides = [
  {
    key: "one",
    title: "Confidentialite",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./imagesOnBording/new.png"),
  },
  {
    key: "two",
    title: "TAKE A BREAK",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./imagesOnBording/Hello.gif"),
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./imagesOnBording/Glowinguniverse.gif"),
  },
];


export default class App extends React.Component {

 
  state = { showHomePage: 0 };



  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, backgroundColor: "#030310" ,width:"100%" }}>
        <View style={{  justifyContent: "center", alignItems: "center",width:"100%"}}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "70%",
            width: "100%",
            marginTop: "10%",
         
          }}
        />
        </View>
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 20,
       
            fontSize: 23,
            fontWeight: "bold",
            color: "#efefef",
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign: "center",
          color: "#b5b5b5",
          fontSize: 15,
          paddingHorizontal: 30
        }}>
          {item.text}
        </Text>

      </View>
    );
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-arrow-forward" color="rgba(255, 255, 255, .9)"
          size={24} />

      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>


        <Icon
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showHomePage: 1 });
  }
  render() {


    if (this.state.showHomePage !== 0) {
      return (
        <View style={{ flex: 1 }}>
            <Navigation userToken ={this.state.showHomePage}/>
            <FlashMessage position="top" /> 
        </View>
      );
    
    }else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          onDone={this._onDone}
          activeDotStyle={{
            backgroundColor: "#efefef",
            width: 30
          }}
        />
      );
  }
}
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});