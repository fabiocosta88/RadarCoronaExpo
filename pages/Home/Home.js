import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import tz from 'moment-timezone';

// Services
import getBrazilTotals from '../../utils/services/BrazilService';
import getGlobalTotals from '../../utils/services/GlobalService';

// Styled Components
import {
    ContainerView,
    Title,
    TitleContainer,
    SubTitle,
    Updated,
    CardContainer,
    GlobalContainer,
    GlobalTitle,
} from './HomeStyles';

import Card from './Card/Card';

// Colors
import { colors } from '../../styles/colors';

export default function Home() {
    const [data, setData] = useState([]);
    const [opacityG, setOpacityG] = useState('0.3');
    const [opacityBr, setOpacityBr] = useState('1');

    useEffect(() => {
        async function fetchData() {
            const response = await getBrazilTotals();
            setData(response);
        }
        fetchData();
    }, []);

    const math = (data.deaths / data.cases) * 100;
    const porcentage = parseFloat(math.toFixed(2)) + '%';
    const date = moment(data.Updated)
        .tz('America/Sao_Paulo')
        .format('DD/MM/YYYY, HH:mm');

    async function fetchGlobalData() {
        const response = await getGlobalTotals();
        setData(response);
    }

    async function fetchData() {
        const response = await getBrazilTotals();
        setData(response);
    }

    const handlePressG = () => {
        fetchGlobalData();
        setOpacityG('1');
        setOpacityBr('0.3');
    };

    const handlePressBr = () => {
        fetchData();
        setOpacityBr('1');
        setOpacityG('0.3');
    };

    return (
        <>
            <ContainerView>
                <TitleContainer>
                    <TouchableOpacity onPress={() => handlePressBr()}>
                        <Title opacity={opacityBr}>Brasil</Title>
                    </TouchableOpacity>
                    <GlobalContainer>
                        <TouchableOpacity onPress={() => handlePressG()}>
                            <GlobalTitle opacity={opacityG}>Global</GlobalTitle>
                        </TouchableOpacity>
                    </GlobalContainer>
                    <SubTitle>Dados gerais</SubTitle>
                    <Updated>Atualizado em: {date}</Updated>
                </TitleContainer>
                <CardContainer>
                    <Card
                        title='Casos confirmados'
                        info={
                            <NumberFormat
                                value={data.cases}
                                displayType={'text'}
                                thousandSeparator={true}
                                renderText={(value) => <Text>{value}</Text>}
                            />
                        }
                        color={colors.yellow}
                    />
                    <Card
                        title='Óbitos'
                        info={
                            <NumberFormat
                                value={data.deaths}
                                displayType={'text'}
                                thousandSeparator={true}
                                renderText={(value) => <Text>{value}</Text>}
                            />
                        }
                        color={colors.redPink}
                    />
                    <Card
                        title='Mortalidade'
                        info={porcentage}
                        color={colors.purple}
                    />
                    <Card
                        title='Testes realizados'
                        info={
                            <NumberFormat
                                value={data.tests}
                                displayType={'text'}
                                thousandSeparator={true}
                                renderText={(value) => <Text>{value}</Text>}
                            />
                        }
                        color={colors.green}
                    />
                </CardContainer>
            </ContainerView>
        </>
    );
}
