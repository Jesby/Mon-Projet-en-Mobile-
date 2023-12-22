import React from "react";
import { View, Text } from "react-native"
import Home from "../Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Messages from "../messages";
import Settings from "../settings";

const BottomTabs = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black', // Définir la couleur par défaut sur blanc
        tabBarStyle: { backgroundColor: '#0388fc' } // Définir le fond bleu clair
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Parametres"
        component={Settings}
        options={{
          tabBarLabel: 'Parametres',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
