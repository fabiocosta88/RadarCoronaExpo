import React, { useState, useEffect } from 'react';

// Styled Components
import {
    ContainerView,
    Title,
    TitleContainer,
} from './CountyStyles';


export default function County() {

    return (
        <>
            <ContainerView>
                <TitleContainer>
                    <Title>Municípios</Title>
                </TitleContainer>
            </ContainerView>
        </>
    );
}
