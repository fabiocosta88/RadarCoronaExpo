import React from "react";

// Libs
import { Header as ElementsHeader } from "react-native-elements";

export default function Header({ open }) {
    return (
        <ElementsHeader
            leftComponent={{
                icon: "menu",
                color: "#fff",
                onPress: () => open(),
            }}
            centerComponent={{ style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
        />
    );
}
