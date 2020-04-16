import React from 'react';
import {
    createDrawerNavigator,
    DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text, Image } from 'react-native';

// Components
import Home from '../../Home/Home';
import Cares from '../../Cares/Cares';
import Config from '../../Config/Config'
import News from '../../News/News';
const Drawer = createDrawerNavigator();

import { colors } from '../../../styles/colors';

// Styles
import styles from './DrawerStyles';

function CustomDrawerContent(props) {
    return (
        <>
            <View style={styles.containertitle}>
                <Image
                    style={{ width: 60, height: 60 }}
                    source={require('../../../assets/icon.png')}
                />
                <Text style={styles.title}>Radar Corona</Text>
            </View>
            <View style={styles.container}>
                <DrawerItemList
                    activeTintColor={colors.primary}
                    labelStyle={{
                        color: colors.black,
                        fontSize: 14,
                    }}
                    {...props}
                />
            </View>
            <View style={styles.containerfooter}>
                <Text style={styles.footer}>
                    Criado por: Fábio Costa e Hermany Vieira.
                </Text>
            </View>
        </>
    );
}

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name='Inicio' component={Home} />
            <Drawer.Screen
                name='O que é? Como se prevenir?'
                component={Cares}
            />
            <Drawer.Screen name='Notícias' component={News} />
            <Drawer.Screen name='Configurações' component={Config} />
        </Drawer.Navigator>
    );
}
