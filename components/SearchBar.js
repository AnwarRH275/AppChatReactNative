import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

function SearchBar() {
  return (
    <View style={styles.container}>
       <Fontisto name='search' size={20} color={'#858585'} />
       <Text style={styles.textSearchColor}>Recherche Contact</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#333333',
        flexDirection:'row', 
        paddingHorizontal:10,
        height:40,
        alignItems:'center',
        borderRadius:10
    },
    textSearchColor:{
        color:"#858585",
        paddingLeft:10,
        fontSize:20
    }
})

export default SearchBar