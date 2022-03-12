import React from 'react'
import { Pressable, Modal,View,Text,StyleSheet,TextInput,SafeAreaView, LogBox  } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'


LogBox.ignoreLogs(['Remote debugger']);
function ChatHeader({setModalVisible}) {
  return (
    <View style={styles.container}>
        <Pressable  
            onPress={()=> setModalVisible(false)}
        >  
         <Text style={styles.buttonText}>Fermer</Text>
             </Pressable>
            
            <Text style={styles.heading}>Discussions</Text>
            <Entypo name='bell' size={23} color="#efefef" />
       

    </View>
  )
}
 
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:18,
        paddingHorizontal:10
        
     
    },
    heading:{
        color:'white',
        fontSize:18,
        fontWeight:"bold"
    },
    buttonText:{
        color:'white',
        fontSize:18
    }
})

export default ChatHeader