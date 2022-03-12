import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import MeetingRooms from './screens/MeetingRooms';

function Navigation() {
    const stack = createStackNavigator();
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName={Home}>
            <stack.Screen
                name="Home"
                options={{headerMode: 'none', headerShown : false}}
                component={Home }
            />
            <stack.Screen

                name="Room"
                component={MeetingRooms }
                options={{
                    title:"Appels",
                    headerStyle:{
                        backgroundColor:'#1c1c1c',
                        shadowOpacity:0
                    },
                    headerTintColor:'white',
                    
                }
                
            }
            />
            
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation