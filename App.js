import React from "react";
import { View, Text, Image } from 'react-native';

// Other Libs
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

// Components
import Home from "./pages/Home/Home";
import Cares from "./pages/Cares/Cares";
import About from "./pages/About/About";
import styles from "./DrawerStyles"

const Drawer = createDrawerNavigator();

  function CustomDrawerContent(props) {
    return (
        <>
        <View style={styles.containertitulo}>
        <Image
            style={{width: 60, height: 60}}
            source={require('./assets/icon.png')}
        />
        <Text style={styles.titulo}>Radar Corona</Text>
        </View>
        <View style={styles.container}>
            <DrawerItemList activeTintColor="#A533FF" labelStyle={{
                color: '#000'
            }} {...props} />
        </View>
        <View style={styles.containerfooter}>
            <Text style={styles.footer}>Criado por: Fábio Costa e Hermany Vieira.</Text>
        </View>
        </>
    );
  }

  function MyDrawer() {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Cuidados" component={Cares} />
        <Drawer.Screen name="Sobre" component={About} />
      </Drawer.Navigator>
    );
  }

export default function App() {
    return (
        <>
            <NavigationContainer>
                <MyDrawer/>
            </NavigationContainer>
        </>
    );
}
