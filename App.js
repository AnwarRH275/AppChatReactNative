import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Navigation from './navigation/Navigation';
import AppIntroSlider from 'react-native-app-intro-slider';
import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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
    image: require("./imagesOnBording/2.png"),
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./imagesOnBording/3.png"),
  },
];


export default class App extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, backgroundColor: "#1c1c1c" ,width:"100%" }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "70%",
            width: "100%",
            marginTop: "10%",
         
          }}
        />
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
    this.setState({ showHomePage: true });
  }
  render() {
    if (this.state.showHomePage) {
      return <Navigation />
    } else
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