import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FlatListScreen from "./scroll/FlatListScreen";
import FormScreen from "./scroll/FormScreen";
import SectionListScreen from "./scroll/SectionListScreen"

const Tab = createBottomTabNavigator();

export default function ScrollScreen() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused
                                ? 'settings'
                                : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Flat" component={FlatListScreen} />
                <Tab.Screen name="Sec" component={SectionListScreen} />
                <Tab.Screen name="Form" component={FormScreen}/>
            </Tab.Navigator>
    );
}
