import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import MeetingRooms from '../screens/MeetingRooms';
import Call from '../screens/Call';
import Settings from '../screens/settings';
import Discussions from '../screens/Discussion';
import EditProfil from '../screens/EditProfil';

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
            <stack.Screen

                    name="Chat"
                    component={Discussions }
                    options={{
                        title:"Discussions",
                        headerStyle:{
                            backgroundColor:'#1c1c1c',
                            shadowOpacity:0
                        },
                        headerTintColor:'white',
                        
                    }

                    }
                    />

            <stack.Screen
                name="Call"
                component={Call }
                options={{
                    title:"Appel",
                    headerStyle:{
                        backgroundColor:'#1c1c1c',
                        shadowOpacity:0
                    },
                    headerTintColor:'white',
                    
                }
                }
                />
            <stack.Screen
                name="Settings"
                component={Settings }
                options={{
                    title:"Paramètres",
                    headerStyle:{
                        backgroundColor:'#1c1c1c',
                        shadowOpacity:0
                    },
                    headerTintColor:'white',
                    
                }
                }
                />
                 <stack.Screen
                    name="EditProfil"
                    component={EditProfil}
                    options={{
                        title:"Edité le Profile",
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