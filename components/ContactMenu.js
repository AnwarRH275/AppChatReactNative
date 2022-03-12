import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import AntDesgin from 'react-native-vector-icons/AntDesign'

const contactMenuItems = [
    {
        type:"starred",
        name:'starred'
    },
    {
        type:"contact",
        name:"Anwar ERHANI",
        photo:require('../assets/male-13.jpg')
    },
    {
        type:"contact",
        name:"Amine Algoting",
        photo:require('../assets/male-14.jpg')
    },
    {
        type:"contact",
        name:"First Client",
        photo:require('../assets/male-15.jpg')
    }

]

function ContactMenu() {
  return (
    <View style={styles.container}>
        {contactMenuItems.map((contact,index)=>
        <View
        key={index}
         style={styles.row}>
            {/* Image */}
            {contact.type=='starred' ? 
            
            ( <View style={styles.sharredIcon}>
                <AntDesgin name="star" size={30} color={"#efefef"} />
            </View>) :
            ( 
                <Image source={contact.photo} style={styles.image} />
            ) }
           
            {/* Text */}
            <Text style={styles.text}>
                {contact.name}
            </Text>
        </View>
)}
    </View>
  )
}


const styles = StyleSheet.create({
    container:{

    },
    sharredIcon:{
        backgroundColor:"#333333",
        width:55,
        height:55,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    row:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'center'
    },
    text:{
        color:'white',
        paddingLeft:15,
        fontSize:18,

    },
    image:{
        width:55,
        height:55,
        borderRadius:20
    }

})

export default ContactMenu