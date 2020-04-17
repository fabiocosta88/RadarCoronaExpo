import React from 'react';
import { StatusBar } from 'react-native';

// Components
import MyTabs from './pages/Components/TabsNavigator/Tabs';

// Colors
import { colors } from './styles/colors';

console.disableYellowBox = true;

export default function App() {
    return (
        <>
            <StatusBar
                barStyle='light-content'
                hidden={false}
                backgroundColor={colors.primary}
            />
            <MyTabs />
        </>
    );
}
