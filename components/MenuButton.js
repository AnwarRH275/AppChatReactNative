import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


const items=[
    {
        id:1,
        name:"adduser",
        title:"Ajouté contact",
        customColor:'green',
        navigate:"AddContact"
    },
    {
        id:2,
        name:"video-camera",
        title:"Appels",
        navigate:"Call"
    },
    {
        id:3,
        name:"comments",
        title:"Discussions",
        navigate:"Chat"
       
    },
    {
        id:4,
        name:"Settings",
        title:"Paramètres",
        navigate:"Settings"
    },

]

function MenuButton({navigation}) {

    const openMeeting = (nav)=>{
        navigation.navigate(nav)
    }

  return (
   <View style={styles.container}>
       {/* OneButton */}

       {items.map((item,index)=>
            <View
                key={index}
              style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => openMeeting(item.navigate)}
                style={{...styles.button,
                    backgroundColor:item.customColor ? item.customColor :"#0470Dc"}}
                >
                    {item.name === "adduser" ?  <MaterialIcons name="add-ic-call" size={23} color="#efefef" /> :
                    item.name === "Settings" ? <Ionicons name="settings-outline" size={23} color="#efefef" /> :
                    <FontAwesome name={item.name} size={23} color="#efefef"/> }    
                       
                </TouchableOpacity>
                <Text style={styles.menuText} >{item.title}</Text>

            </View>
       )}

   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:25,
        paddingBottom:10,
        borderBottomColor:"#1f1f1f",
        borderBottomWidth:1 ,
        justifyContent:'space-between',

    },
    buttonContainer:{
        alignItems:'center',
        fontSize:12,
        paddingTop:10,
        fontWeight:"600",
        flex:1


    },
    menuText:{
        color:'#858585',
        paddingTop:10
    },
    button:{
        width:50,
        height:50,
        backgroundColor:"blue",
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MenuButton;