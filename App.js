import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View} from 'react-native'

import HomeScreen from './Screens/Home'
import DogemScreen from './Screens/Dogem'
import RegisterScreen from './Screens/Register'
import OnboardingScreen from './Screens/Onboarding'
import { signOut } from 'firebase/auth';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{headerShown:false}}
                    />
                <Stack.Screen name="Register" component={RegisterScreen} options={{title:'Register'} }/>
                <Stack.Screen 
                    name="Onboard" 
                    component={OnboardingScreen} 
                    options={({navigation}) => ({
                        title:'Onboarding',
                        headerStyle: {
                          backgroundColor: '',
                        },
                        
                        headerRight: () => (
                          <View style={{marginHorizontal: -10, flexDirection: "row"}}>
                           <Button
                             title="DogEm" //Header Button
                             onPress={() => navigation.navigate('Dogem')}   
                            />
                          </View>
                        )  
                       })}
                     />
                
                <Stack.Screen name="Dogem" 
                component={DogemScreen} 
                options={({navigation}) => ({
                        title:'DogEm',
                        headerStyle: {
                        backgroundColor: '',
                        },
                        headerLeft: () => (
                          <View style={{marginHorizontal: -10, flexDirection: "row"}}>
                           <Button
                             title="Onboarding" //Header Button
                             onPress={() => navigation.navigate('Onboard')}   
                            />
                          </View>
                        )   
                        ,
                        headerRight: () => (
                          <View style={{marginHorizontal: -10, flexDirection: "row"}}>
                           <Button
                             title="Log Out" //Header Button
                             onPress={() => navigation.navigate('Home')}   
                            />
                          </View>
                        )  
                       })}
                     />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyStack;