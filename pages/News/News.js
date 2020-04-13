import React from "react";

// Styled Components
import { ContainerView, Text } from "./NewsStyles";

import Header from "../Components/Header/Header";

export default function News({ navigation }) {
    const open = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Header open={open} />
            <ContainerView>
                <Text>Noticias sobre covid-19</Text>
            </ContainerView>
        </>
    );
}
