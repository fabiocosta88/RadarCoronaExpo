import React from "react";

// Other Libs
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Components
import Home from "./pages/Home/Home";
import Cares from "./pages/Cares/Cares";
import About from "./pages/About/About";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="About">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="About" component={About} />
                    <Drawer.Screen name="Cares" component={Cares} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    );
}
