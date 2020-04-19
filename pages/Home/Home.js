import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import tz from 'moment-timezone';

// Services
import getBrazilTotals from '../../utils/services/BrazilService';
import getGlobalTotals from '../../utils/services/GlobalService';
import getCountries from '../../utils/services/CountriesService';
import getCountryData from '../../utils/services/CountryService';

// Helpers
import { formatCountriesResponse } from '../../utils/helpers/CountriesHelper';

// Components
import { Dropdown } from 'react-native-material-dropdown';

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
    WhiteLabel,
} from './HomeStyles';

import Card from './Card/Card';

// Colors
import { colors } from '../../styles/colors';

export default function Home() {
    const [data, setData] = useState([]);
    const [opacityG, setOpacityG] = useState('0.3');
    const [opacityBr, setOpacityBr] = useState('1');
    const [count, setCount] = useState([]);
    const [dropDisplay, setDropDisplay] = useState('none');
    const [title, setTitle] = useState('Dados gerais');

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
        const responseCoun = await getCountries();
        setCount(formatCountriesResponse(responseCoun));
    }

    async function fetchCountryData(name) {
        const response = await getCountryData(name);
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
        setDropDisplay('flex');
        setTitle('Global');
    };

    const handlePressBr = () => {
        fetchData();
        setOpacityBr('1');
        setOpacityG('0.3');
        setTitle('Dados gerais');
        setDropDisplay('none');
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
                    <SubTitle>{title}</SubTitle>
                    <Updated>Atualizado em: {date}</Updated>
                </TitleContainer>
                <WhiteLabel display={dropDisplay}>
                    <Dropdown
                        label='País'
                        fontSize={16}
                        labelFontSize={18}
                        data={count}
                        baseColor='#000'
                        containerStyle={{
                            width: '85%',
                            top: '-2%',
                        }}
                        onChangeText={(value) => {
                            setTitle(value);
                            fetchCountryData(value);
                        }}
                    />
                </WhiteLabel>

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
