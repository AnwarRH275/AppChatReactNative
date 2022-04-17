import React from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Settings = ({navigation}) => {


   

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image 
                    source={ require('../assets/male-13.jpg')}
                    size={80}
                />
                    <View style={{marginLeft: 20}}>
                    <Title style={[styles.title, {
                        marginTop:15,
                        marginBottom: 5,
                    }]}>Anwar Progress</Title>
                    <Caption style={styles.caption}>Disponible</Caption>
                    </View>
                </View>
                </View>
                    

            <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#E5CEDB" size={20}/>
                    <Text style={{color:"#E5CEDB", marginLeft: 20}}>Mohammedia, Maroc</Text>
                    </View>
                    <View style={styles.row}>
                    <Icon name="phone" color="#E5CEDB" size={20}/>
                    <Text style={{color:"#E5CEDB", marginLeft: 20}}>+212 7 71 75 74 54</Text>
                    </View>
                    <View style={styles.row}>
                    <Icon name="email" color="#E5CEDB" size={20}/>
                    <Text style={{color:"#E5CEDB", marginLeft: 20}}>anwar@progess.ia</Text>
                    </View>
            </View>
        

            <View style={styles.infoBoxWrapper}>
                
            </View>


            <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Ionicons name="star-half" size={25} color="#0470Dc" />
                        <Text style={styles.menuItemText}>Message important</Text>
                    </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {navigation.navigate('EditProfil')}}>
                    <View style={styles.menuItem}>
                    
                        <MaterialCommunityIcons name="account-circle-outline" size={25} color="#0470Dc" />
                        <Text style={styles.menuItemText}>Compte</Text>
                    </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Ionicons name="ios-chatbubbles-outline" size={25} color="#0470Dc" />
                    
                        <Text style={styles.menuItemText}>Discusion</Text>
                    </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        
                        <MaterialIcons name="notifications-none" size={25} color="#0470Dc" />
                        <Text style={styles.menuItemText}>Notifications</Text>
                    </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        
                        <MaterialCommunityIcons name="help-circle-outline" size={25} color="#0470Dc" />
                        <Text style={styles.menuItemText}>Aide</Text>
                    </View>
                    </TouchableRipple>
                </View>
            </ScrollView>
      </SafeAreaView>
    );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:"#1c1c1c",
        },
        userInfoSection: {
          paddingHorizontal: 30,
          marginBottom: 25,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          color:"#fff",
        },
        caption: {
          fontSize: 14,
          lineHeight: 14,
          fontWeight: '500',
          color:'#efefef'
        },
        row: {
          flexDirection: 'row',
          marginBottom: 10,
        },
        infoBoxWrapper: {
          borderBottomColor: '#E5CEDB',
          borderBottomWidth: 1,
          borderTopColor: '#E5CEDB',
          borderTopWidth: 1,
          flexDirection: 'row',
          marginHorizontal:30
         
        },
        infoBox: {
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        },
        menuWrapper: {
          marginTop: 10,
        },
        menuItem: {
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 30,
        },
        menuItemText: {
          color: '#E5CEDB',
          marginLeft: 20,
          fontWeight: '600',
          fontSize: 16,
          lineHeight: 26,
        },
      });
export default Settings;