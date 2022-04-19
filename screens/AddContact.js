import React,{useState,useEffect} from 'react';
import {Modal,View,Text,StyleSheet,TextInput,SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import StartAppel from './StartAppel';
import { io } from 'socket.io-client';
import { Camera } from 'expo-camera';
import { Alert } from 'react-native-web';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Chat from '../components/Chat';

const menuIcons = [
  {
    id:1,
    name:'microphone',
    title:'mute',
    customColor:'#efefef'
  },
  {
    id:2,
    name:'video-camera',
    title:'Stop Video',
    customColor:'#efefef'
  },
  {
    id:3,
    name:'upload',
    title:'Partage',
    customColor:'#efefef'
  },
  {
    id:4,
    name:'group',
    title:'Participants',
    customColor:'#efefef'
  },
 
]

let socket;

const AddContact = ({navigation,route}) =>{

  

  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");


  const joinRoom = () => {
    __startCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };






  return (
    <View style={styles.container}>
      
        <StartAppel
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom} 
          navigation={navigation}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  textTile: {
    color: "white",
    marginTop: 10,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
  },
  cameraContainer: {
    backgroundColor: "black",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  activeUsesrContainer: {
    flex: 1,
    justifyContent: "center",
  },
  activeUserContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default AddContact