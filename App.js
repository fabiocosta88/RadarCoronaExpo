import React from 'react';
import { StatusBar } from 'react-native';

// Other Libs
import { NavigationContainer } from '@react-navigation/native';

// Components
import MyDrawer from './pages/Components/Drawer/Drawer';

// Colors
import { colors } from './styles/colors';

export default function App() {
    return (
        <>
            <StatusBar
                barStyle='dark-content'
                hidden={false}
                backgroundColor={colors.white}
            />
            <NavigationContainer>
                <MyDrawer />
            </NavigationContainer>
        </>
    );
}
