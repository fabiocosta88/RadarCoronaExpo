import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Components
import Home from '../../Home/Home';
import County from '../../County/County';
import Cares from '../../Cares/Cares';
import Config from '../../Config/Config'
import News from '../../News/News';

// Styles

import { colors } from '../../../styles/colors';

const Tab = createBottomTabNavigator();


export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                swipeEnabled= {true}
                animationEnabled= {false}
                tabBarOptions={{
                    activeTintColor: colors.primary,
                    inactiveTintColor: '#959595'
                }}
            >

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-home" color={color} size={size} />
                    ),
                    }}

                />

                <Tab.Screen
                    name="County"
                    component={County}
                    options={{
                    tabBarLabel: 'Municípios',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-pin" color={color} size={size} />
                    ),
                    }}

                />

                <Tab.Screen
                    name="Cares"
                    component={Cares}
                    options={{
                    tabBarLabel: 'Prevenções',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-medkit" color={color} size={size} />
                    ),
                    }}

                />

                <Tab.Screen
                    name="News"
                    component={News}
                    options={{
                    tabBarLabel: 'Notícias',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-chatbubbles" color={color} size={size} />
                    ),
                    }}

                />

                <Tab.Screen
                    name="Config"
                    component={Config}
                    options={{
                    tabBarLabel: 'Configurações',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-settings" color={color} size={size} />
                    ),
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
  }
