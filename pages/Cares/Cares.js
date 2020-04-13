import React from "react";
import {View, Text, Image} from 'react-native';

// Styled Components
import styles from "./CaresStyles";

import Header from "../Components/Header/Header";

export default function Cares({ navigation }) {
    const open = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Header open={open} />
            <View>
                <Text>
                    O que você precisa saber e fazer:
                </Text>
                <View >
                    <Image></Image>
                    <Text>Lave as mãos com água e sabão ou use álcool em gel.</Text>
                </View>
                <View >
                    <Image></Image>
                    <Text>Cubra o nariz e boca ao espirrar ou tossir.</Text>
                </View>
                <View >
                    <Image></Image>
                    <Text>Evite aglomerações se estiver doente.</Text>
                </View>
                <View >
                    <Image></Image>
                    <Text>Mantenha os ambientes bem ventilados.</Text>
                </View>
                <View >
                    <Image></Image>
                    <Text>Não compartilhe objetos pessoais.</Text>
                </View>
            </View>
        </>
    );
}
