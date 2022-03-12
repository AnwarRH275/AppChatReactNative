import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const items=[
    {
        id:1,
        name:"phone",
        title:"Appel",
        customColor:'green'
    },
    {
        id:2,
        name:"comments",
        title:"Discussions"
    },
    {
        id:3,
        name:"calendar",
        title:"Calendier"
    },
    {
        id:4,
        name:"upload",
        title:"Partage"
    },

]

function MenuButton({navigation}) {

    const openMeeting = ()=>{
        navigation.navigate("Room")
    }

  return (
   <View style={styles.container}>
       {/* OneButton */}

       {items.map((item,index)=>
            <View
                key={index}
              style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => openMeeting()}
                style={{...styles.button,
                    backgroundColor:item.customColor ? item.customColor :"#0470Dc"}}
                >
                        <FontAwesome name={item.name} size={23} color="#efefef"/>
                        
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