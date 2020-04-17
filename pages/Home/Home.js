import React, { useState, useEffect } from 'react';

// Services
import getBrazilTotals from '../../utils/services/BrazilService';

// Styled Components
import {
    ContainerView,
    Title,
    TitleContainer,
    SubTitle,
    Updated,
    CardContainer,
} from './HomeStyles';

import Header from '../Components/Header/Header';
import Card from './Card/Card';

// Colors
import { colors } from '../../styles/colors';

export default function Home({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getBrazilTotals();
            setData(response);
        }
        fetchData();
    }, []);
    const open = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Header open={open} />
            <ContainerView>
                <TitleContainer>
                    <Title>Brasil</Title>
                    <SubTitle>Dados gerais</SubTitle>
                    <Updated>Atualizado em: 16/04/2020 as 20:33</Updated>
                </TitleContainer>
                <CardContainer>
                    <Card
                        title='Casos confirmados'
                        info={data.cases}
                        color={colors.yellow}
                    />
                    <Card
                        title='Óbitos'
                        info={data.deaths}
                        color={colors.redPink}
                    />
                    <Card
                        title='Testes'
                        info={data.tests}
                        color={colors.green}
                    />
                </CardContainer>
            </ContainerView>
        </>
    );
}
