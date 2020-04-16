import React from 'react';
import { StatusBar } from 'react-native';

// Other Libs
import { NavigationContainer } from '@react-navigation/native';

// Components
import MyDrawer from './pages/Components/Drawer/Drawer';

export default function App() {
    return (
        <>
            <StatusBar
                barStyle='dark-content'
                hidden={false}
                backgroundColor='#1B95E0'
            />
            <NavigationContainer>
                <MyDrawer />
            </NavigationContainer>
        </>
    );
}
