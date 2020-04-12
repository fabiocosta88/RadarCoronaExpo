import React from "react";

// Other Libs
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "./pages/Home/Home";
import Cares from "./pages/Cares/Cares";
import About from "./pages/About/About";
import Header from "./pages/Components/Header/Header";

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <Header />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="About">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="About" component={About} />
                    <Stack.Screen name="Cares" component={Cares} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
