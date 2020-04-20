import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components
import Home from '../../Home/Home';
import County from '../../County/County';
import Cares from '../../Cares/Cares';
import Config from '../../Config/Config'
import News from '../../News/News';

// Styles
import { colors } from '../../../styles/colors';

const Tab = createMaterialTopTabNavigator();

function emptyList() {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center',  height: '100%'}}>
            <ActivityIndicator size={100} color={colors.primary} />
        </View>
    );
}

export default function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName="home"
        lazy={true}
        lazyPreloadDistance={1}
        lazyPlaceholder={emptyList}
        tabBarPosition={'bottom'}
        tabBarOptions={{
            showIcon: true,
            activeTintColor: colors.primary,
            inactiveTintColor: '#959595',
            labelStyle: { fontSize: 8 },
            tabStyle : { height : 60}
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                tabBarLabel: 'Início',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="md-home" color={color} size={24} />
                ),
                }}

            />

            <Tab.Screen
                name="County"
                component={County}
                options={{
                tabBarLabel: 'Municípios',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="md-pin" color={color} size={24} />
                ),
                }}

            />

            <Tab.Screen
                name="Cares"
                component={Cares}
                options={{
                tabBarLabel: 'Prevenções',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="md-medkit" color={color} size={24} />
                ),
                }}

            />

            <Tab.Screen
                name="News"
                component={News}
                options={{
                tabBarLabel: 'Notícias',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="md-chatbubbles" color={color} size={24} />
                ),
                }}

            />

            <Tab.Screen
                name="Config"
                component={Config}
                options={{
                tabBarLabel: 'Links e Sobre',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="md-information-circle" color={color} size={24} />
                ),
                }}

            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
