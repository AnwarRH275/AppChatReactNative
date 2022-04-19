import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import AntDesgin from 'react-native-vector-icons/AntDesign'

const contactMenuItems = [
    {
        type:"starred",
        name:'starred'
    },
    {
        type:"contact",
        name:"Anwar Progess",
        number:'123456789',
        photo:require('../assets/male-13.jpg')
    },
    {
        type:"contact",
        name:"Amine Algoting",
        number:'123456789',
        photo:require('../assets/male-14.jpg')
    },
    {
        type:"contact",
        name:"First Client",
        number:'123456789',
        photo:require('../assets/male-15.jpg')
    }

]


function ContactMenu({navigation}) {

    const goChat = (nameUser,number) =>{
       navigation.navigate('MeetingRooms',{nameUser:nameUser,number:number,call:false})
      
    }

  return (
    <View style={styles.container}>
        {contactMenuItems.map((contact,index)=>
        <TouchableOpacity key={index}
        onPress={() => goChat(contact.name,contact.number)}
        >
        <View
        
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
        </TouchableOpacity>
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