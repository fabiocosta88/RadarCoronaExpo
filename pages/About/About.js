import React from "react";

// Styled Components
import { ContainerView, Text } from "./AboutStyles";

import Header from "../Components/Header/Header";

export default function About({ navigation }) {
    const open = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Header open={open} />
            <ContainerView>
                <Text>Sobre os desenvolvedores</Text>
            </ContainerView>
        </>
    );
}
