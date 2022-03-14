import { Platform } from 'expo-modules-core';
import React,{useState,useEffect} from 'react'
import {FlatList,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,View,Text,StyleSheet,TextInput,SafeAreaView,TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-rn';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import RecivedMessage from './RecivedMessage';



function Chat({setModalVisible,roomId,userName,socket}) {
    const [messageText,setMessageText] = useState();
    const [messageTexts,setMessageTexts] = useState([]);

    const submitMessage = ()=>{
        if(messageText!==''){
        socket.emit('chat message',{ roomId: roomId, userName: userName,messageText:messageText });
        //console.log(messageText)
        setMessageText(''); 
        }
    }

    useEffect(() => {
        submitMessage();
        socket.on('messages',(msg) => {
            //console.log(msg)
            msg = msg.filter((msgs) => msgs.roomId === roomId)
            setMessageTexts(msg);
            
        });
        
        return () => {
            setMessageTexts([]);
          };
        }, []);
      

  return (
    <View 
        style={styles.container}
    >
        <SafeAreaView style={{height:'100%'}}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? 'padding':'height'}
                style={{flex:1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex:1}}>
                    <ChatHeader setModalVisible={setModalVisible}/>
                    {/* Chat Message */}
                    
                    {/* <MessageList 
                        messageTexts={messageTexts}
                        userName={userName}
                        roomId={roomId}
                    
                    /> */}
                    
                    <View style={styles.chatMessages}>

                        <FlatList 
                            contentContainerStyle={{ flexDirection: 'column-reverse'}}
                            data={messageTexts}
                            inverted
                            keyExtractor={(item, index) => 'key'+index}
                            renderItem={
                                ({item})=> (item.roomId === roomId && item.userName === userName) ?
                                (
                                    <View style={styles.sendMsg}>
                                        <Text style={styles.name}> {item.userName}</Text>
                                        <Text style={styles.msg}>{item.msg}</Text>
                                    </View>
                                ): 
                                (
                                <View style={styles.RecivedMsg}>
                                    <Text style={styles.name}> {item.userName}</Text>
                                    <Text style={styles.msg}>{item.msg}</Text>
                                </View>
                                    
                                )
                            }

                        
                        />
                    {/* {messageTexts
                        .map((user, index) => (
                        <View style={styles.chatContainer} key={index}>
                            <Text style={{ color: "white" }}>{user?.msg}</Text>
                            
                        </View>
                        ))} */}
                    </View>
                    {/* Type ege */}
                    <View style={styles.chatFormContainer}>
                        <Text style={{color:'white'}}>Envoyer à tout le monde </Text>
            
                        <View style={styles.chatForm}>
                            <TextInput 
                                value={messageText}
                                onChangeText={text=>setMessageText(text)}
                                style={styles.textInput}
                                placeholder="Votre  message ...."
                                placeholderTextColor={'#595859'}
                            />
                        
                        <TouchableOpacity
                            style={{
                                ...styles.button,
                                backgroundColor: messageText?'#0b71eb':'#373538'
                            }}
                            onPress={()=>submitMessage()}
                        >
                            <FontAwesome name={'send'} size={18} color="#efefef" />
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    
    msg:{
        color:'white',
    },
    sendMsg:{
        alignItems:'flex-end',
        marginTop:8,
        marginLeft:8,
        marginRight:8,
        padding:6,
       
        alignSelf:'flex-end',
        borderTopRightRadius:12,
        borderBottomLeftRadius:12,
        borderTopLeftRadius:12,
        backgroundColor:"#0b71eb"
    },
    RecivedMsg:{
        alignItems:'flex-start',
        marginTop:8,
        marginLeft:8,
        marginRight:8,
        padding:6,
       
        alignSelf:'flex-start',
        borderTopRightRadius:12,
        
        borderTopLeftRadius:12,
        borderBottomRightRadius:12,
        backgroundColor:"#373538"
    },
    name:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    },
    container:{
        flex:1,
        backgroundColor:'#1c1c1c'
    },
    chatFormContainer:{
        borderColor:'#2f2f2f',
        borderTopWidth:1,
        padding:12
    },
    textInput:{
        height:40,
        color:'#efefef',
        borderColor:'#595859',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginTop:10,
        flex:1
    },
    chatForm:{
       flexDirection:'row'
    },
    button:{
        height:40,
        width:40,
        marginTop:12,
        marginLeft:12,
       
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    },
    chatMessages:{
        flex:1,
        marginBottom:8 
    }
})

export default Chat;

