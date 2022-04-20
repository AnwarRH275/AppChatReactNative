import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import MeetingRooms from '../screens/MeetingRooms';
import Call from '../screens/Call';
import Settings from '../screens/settings';
import Discussions from '../screens/Discussion';
import EditProfil from '../screens/EditProfil';
import AddContact from '../screens/AddContact';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import RegisterPhoneScreen from '../screens/RegisterPhoneScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerificationScreen from '../screens/VerificationScreen';

function Navigation({userToken}) {
    const stack = createStackNavigator();
  return (
    <NavigationContainer>
        
        <stack.Navigator initialRouteName={SigninScreen}>
         <stack.Screen
        
         name="SigninScreen"
         component={SigninScreen }
         options={{
             title:"S'identifier",
             headerStyle:{
                 backgroundColor:'#1c1c1c',
                 shadowOpacity:0,
                 
             },
             headerTintColor:'white',
                headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize:25,
                }
            //  headerMode: 'none', headerShown : true
         }

         }
         />
         
         <stack.Screen

             name="SignupScreen"
             component={SignupScreen }
             options={{
                 title:"S'inscrire",
                 headerStyle:{
                     backgroundColor:'#1c1c1c',
                     shadowOpacity:0
                 },
                 headerTintColor:'white',
                 headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize:25,
                }
                //  headerMode: 'none', headerShown : false
             }

             }
             /> 
                <stack.Screen

                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen }
                options={{
                    title:"Mot de passe oublié",
                    headerStyle:{
                        backgroundColor:'#1c1c1c',
                        shadowOpacity:0
                    },
                    headerTintColor:'white',
                    headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize:20,
                }
                //  headerMode: 'none', headerShown : false
                }

                }
                />
            
            <stack.Screen

                name="VerificationScreen"
                component={VerificationScreen }
                options={{
                    title:"SMS",
                    headerStyle:{
                        backgroundColor:'#1c1c1c',
                        shadowOpacity:0
                    },
                    headerTintColor:'white',
                    headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize:20,
                }
                //  headerMode: 'none', headerShown : false
                }

                }
                />

                <stack.Screen

                name="RegisterPhoneScreen"
                component={RegisterPhoneScreen }
                options={{
                    title:"Téléphone",
                    headerStyle:{
                        backgroundColor:'#1c1c1c',
                        shadowOpacity:0
                    },
                    headerTintColor:'white',
                    headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize:25,
                }
                //  headerMode: 'none', headerShown : false
                }

                }
                /> 
       
       
             
             <stack.Screen
                 name="Home"
                 options={{headerMode: 'none', headerShown : false}}
                 component={Home }
             />
 
                 <stack.Screen
 
                 name="AddContact"
                 component={AddContact }
                 options={{
                     title:"Ajouté un contact",
                     headerStyle:{
                         backgroundColor:'#1c1c1c',
                         shadowOpacity:0
                     },
                     headerTintColor:'white',
                     
                 }
 
                 }
                 />
 
 
            
             <stack.Screen
 
                 name="MeetingRooms"
                 component={MeetingRooms }
                 options={{
                     title:"Start Appel",
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