import React from "react";

// Libs
import { Header as ElementsHeader } from "react-native-elements";

export default function Header() {
    return (
        <ElementsHeader
            leftComponent={{ icon: "menu", color: "#fff"}}
            centerComponent={{ text: "Radar Corona", style: { color: "#fff", fontSize: 28, fontWeight: 'bold'}}}
            rightComponent={{ icon: "home", color: "#fff"}}
            containerStyle={{
                backgroundColor: '#A533FF',
                justifyContent: 'space-around',
                top: -15,
              }}
        />
    );
}
