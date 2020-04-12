import React from "react";

// Styled Components
import { ContainerView, Text } from "./CaresStyles";

import Header from "../Components/Header/Header";

export default function Cares({ navigation }) {
    const open = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Header open={open} />
            <ContainerView>
                <Text>Cares</Text>
            </ContainerView>
        </>
    );
}
