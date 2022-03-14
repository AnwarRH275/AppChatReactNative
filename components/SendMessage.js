import React from 'react'
import {Text,StyleSheet} from 'react-native'
import { View } from 'react-native-web'



function SendMessage({name,msg}) {
    console.log(name)
    console.log(msg)
  return (
    <View >
        <Text style={styles.name}>name</Text>
        <Text style={styles.msg}>msg</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
    name:{
        color:'white',
        fontWeight:'bold'
    },
    msg:{
        color:'white',
    }
})

export default SendMessage