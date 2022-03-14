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

const MeetingRooms = () =>{

 

  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);

  const [modalVisible,setModalVisible] = useState(false)

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access Denied");
    }
  };
  const joinRoom = () => {
    __startCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    const API_URL = "https://11d2-105-68-144-89.ngrok.io";
    socket = io(API_URL);
    socket.on("connection", () => {
      console.log("connected");
    });
    socket.on("all-users", (users) => {
      setActiveUsers(users);
    });

    return () => {
      setActiveUsers([]);
    };
  }, []);



  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Modal
            animationType='slide'
            transparent={false}
            presentationStyle={'fullScreen'}
            visible={modalVisible}
            onRequestClose={()=>{
              setModalVisible(!modalVisible);
            }}
          >
            <Chat
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              roomId={roomId}
              userName={name}
              socket={socket}
            />
          </Modal>

          <View style={styles.activeUsesrContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type="front"
                style={{
                  width: activeUsers.length <= 1 ? "100%" : 200,
                  height: activeUsers.length <= 1 ? 600 : 200,
                }}
              ></Camera>
              {activeUsers
                .filter((user) => user.userName !== name)
                .map((user, index) => (
                  <View style={styles.activeUserContainer} key={index}>
                    <Text style={{ color: "white" }}>{user?.userName}</Text>
                  </View>
                ))}
            </View>
          </View>
          <View style={styles.menu}>
            {menuIcons.map((icon, index) => (
              <TouchableOpacity style={styles.tile} key={icon.id}>
                <FontAwesome name={icon.name} size={24} color="#efefef" />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}

              <TouchableOpacity 
              style={styles.tile}
              onPress={()=>setModalVisible(true)}

              >
                <FontAwesome name={"comment"} size={24} color="#efefef" />
                <Text style={styles.textTile}>Chat</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <StartAppel
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom} 
        />
      )}
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
export default MeetingRooms