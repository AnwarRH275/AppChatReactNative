
import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';


// import * as ImagePicker from 'expo-image-picker';

const EditProfil = () => {

    const [image, setImage] = useState({'male-14.jpg':require('../assets/male-14.jpg')});


    const bs = React.useRef(null);

    let fall = new Animated.Value(1);

    const takePhotoFromCamera = () => {
        // ImagePicker.openCamera({
        //   compressImageMaxWidth: 300,
        //   compressImageMaxHeight: 300,
        //   cropping: true,
        //   compressImageQuality: 0.7
        // }).then(image => {
        //   console.log(image);
        //   setImage(image.path);
        //   bs.current.snapTo(1);
        // });
      }
    
      const choosePhotoFromLibrary = () => {
        // ImagePicker.openPicker({
        //   width: 300,
        //   height: 300,
        //   cropping: true,
        //   compressImageQuality: 0.7
        // }).then(image => {
        //   console.log(image);
        //   setImage(image.path);
        //   bs.current.snapTo(1);
        // });
      }


   const renderInner = () => (
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => bs.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );


      const  renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      );
   return (
        <View style={styles.container}>
            {/* <BottomSheet 
                ref={bs}
                snapPoints={[330, 0]}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
                renderContent={renderInner}
                renderHeader={renderHeader}
            /> */}
             <BottomSheet
                ref={bs}
                snapPoints={[330, 0]}
                //borderRadius={10}
                initialSnap={1}
                enabledGestureInteraction={true}
                callbackNode={fall}
                renderContent={renderInner}
                renderHeader={renderHeader}
            />
            <View style={{margin:20}}>
                <View style={{alignItems:'center',marginBottom:10}}>
                    <TouchableOpacity onPress={()=>{bs.current.snapTo(0)}}>
                        <View style={{
                            width:100,
                            height:100,
                            borderRadius:10,
                            justifyContent:'center',
                            alignItems:'center',
                        }} >
                            <ImageBackground source={image['male-14.jpg']} 
                                    style={{height:100,width:100}}
                                    imageStyle={{borderRadius:15}}
                            >
                                <View style={{
                                    flex:1,
                                    justifyContent:'center',
                                    alignItems:'center',
                                }}>
                                    <FontAwesome name="camera" size={27} color="white" style={{
                                        opacity:0.7,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderWidth:1,
                                        padding:3,
                                        borderColor:'white',
                                        borderRadius:10,
                                    }} />
                                </View>
                             </ImageBackground>       
                        </View>
                    </TouchableOpacity>

                    <Text style={{
                        marginTop:10,
                        fontSize:18,
                        fontWeight:'bold',
                        color:'white',

                    }} >Anwar Progess</Text>      
                </View>

                <View style={styles.action} >
                    <FontAwesome name="user-o" size={20} color="white" />
                    <TextInput style={styles.textInput} placeholder="Enter votre nom" autoCorrect={false} placeholderTextColor="#767476" />
                </View>
                <View style={styles.action} >
                    <FontAwesome name="user-o" size={20} color="white" />
                    <TextInput style={styles.textInput} placeholder="Enter votre prénom" autoCorrect={false} placeholderTextColor="#767476" />
                </View>
                <View style={styles.action} >
                    <FontAwesome name="phone" size={20} color="white" />
                    <TextInput style={styles.textInput} placeholder="Enter votre numéro" autoCorrect={false} placeholderTextColor="#767476" />
                </View>
                <View style={styles.action} >
                    <FontAwesome name="envelope-o" size={20} color="white" />
                    <TextInput style={styles.textInput} placeholder="Enter votre email" autoCorrect={false} placeholderTextColor="#767476" />
                </View>
                <View style={styles.action} >
                    <FontAwesome name="globe" size={20} color="white" />
                    <TextInput style={styles.textInput} placeholder="Enter votre pays" autoCorrect={false} placeholderTextColor="#767476" />
                </View>
                <View style={styles.action} >
                    <FontAwesome5 name="map-marker-alt" size={20} color="white" />
                
                    <TextInput style={styles.textInput} placeholder="Enter votre ville" autoCorrect={false} placeholderTextColor="#767476" />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
            <Text style={styles.panelButtonTitle}>Soumettre</Text>
            </TouchableOpacity>
            </View>
            
        </View>
   )
}

export default EditProfil;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#1c1c1c"
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: 'blue',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#0b71eb',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 5 : -12,
      paddingLeft: 10,
      color: '#efefef',
    },
  });