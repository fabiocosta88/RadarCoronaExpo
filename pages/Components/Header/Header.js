import React from "react";

// Libs
import { Header as ElementsHeader } from "react-native-elements";

export default function Header() {
    return (
        <ElementsHeader
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
        />
    );
}
