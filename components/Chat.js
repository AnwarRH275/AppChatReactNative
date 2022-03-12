import { Platform } from 'expo-modules-core';
import React,{useState} from 'react'
import {KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,View,Text,StyleSheet,TextInput,SafeAreaView,TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import ChatHeader from './ChatHeader';


function Chat({setModalVisible}) {
    const [messageText,setMessageText] = useState()
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
                    <View style={styles.chatMessages}>

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
        flex:1
    }
})

export default Chat;

