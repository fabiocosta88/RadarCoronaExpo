import React from 'react';

import {
    ContainerView,
    TitleContainer,
    Text,
    Label,
    Casos,
    CasosNumber,
    DeathsNumber,
} from './CardStyles';

export default function Card({ confirmed, deaths }) {
    return (
        <ContainerView>
            <TitleContainer>
                <Text>Brasil</Text>
            </TitleContainer>
            <Label>
                <Casos>Casos confirmados:</Casos>
                <CasosNumber>{confirmed}</CasosNumber>
            </Label>
            <Label>
                <Casos>Falecimentos:</Casos>
                <DeathsNumber>{deaths}</DeathsNumber>
            </Label>
        </ContainerView>
    );
}
