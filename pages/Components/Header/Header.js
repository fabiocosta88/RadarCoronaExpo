import React from "react";

// Libs
import { Header as ElementsHeader } from "react-native-elements";

export default function Header({ open }) {
    return (
        <ElementsHeader
            leftComponent={{ icon: "menu", color: "#fff", onPress: () => open()}}
            centerComponent={{ text: "Radar Corona", style: { color: "#fff", fontSize: 28, fontWeight: 'bold', top: -2}}}
            containerStyle={{
                backgroundColor: '#A533FF',
                justifyContent: 'space-around',
                top: -18,
              }}
        />
    );
}
