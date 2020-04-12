import React from "react";

// Styled Components
import { ContainerView, Text } from "./HomeStyles";

import Header from "../Components/Header/Header";

export default function Home({ navigation }) {
    const open = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Header open={open} />
            <ContainerView>
                <Text>Home</Text>
            </ContainerView>
        </>
    );
}
