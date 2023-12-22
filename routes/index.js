import React from "react";
import { View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../ecrans/Home";
import bottomtabs from "../ecrans/tabs";
  
const Stack = createNativeStackNavigator();
const Routes = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={bottomtabs}/>
       </Stack.Navigator>
     </NavigationContainer>
 )
}

export default Routes;