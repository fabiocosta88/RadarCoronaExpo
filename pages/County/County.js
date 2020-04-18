import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

// Services
import getValeTotals from '../../utils/services/ValeService';

// Styled Components
import {
    ContainerView,
    Title,
    TitleContainer,
    Image,
    CardContainer,
    ViewCustom,
    ViewCounty,
    CityTitle,
    CityUpdate,
    MediumTitle,
    NothingText,
} from './CountyStyles';

import { colors } from '../../styles/colors';

import Card from './Card/Card';
import { Dropdown } from 'react-native-material-dropdown';

export default function County() {
    const [data, setData] = useState();
    const [selectedCounty, setselectedCounty] = useState('Nenhum');
    const [showThings, setshowThings] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await getValeTotals(
                selectedCounty.toLowerCase().replace(/ /, '_')
            );
            console.log(response);
            setData(response);
        }
        fetchData();
    }, [selectedCounty]);

    let cities = [
        {
            value: 'Cruzeiro',
        },
        {
            value: 'Cachoeira Paulista',
        },
        {
            value: 'Guaratingueta',
        },
        {
            value: 'Lavrinhas',
        },
        {
            value: 'Lorena',
        },
    ];

    const newData = data;

    const {
        cases,
        casesNegative,
        city_name,
        deaths,
        imported_cases,
        newCases,
        newDeaths,
        newSuspects,
        recovered,
        status,
        suspectsDeath,
        suspectsHome,
        suspectsHospital,
        suspectsTotal,
        suspectsUti,
        update,
    } = data;

    return (
        <>
            <ContainerView>
                <TitleContainer>
                    <Title>Municípios</Title>
                </TitleContainer>
                <CardContainer>
                    <Dropdown
                        label='Município'
                        fontSize={16}
                        labelFontSize={18}
                        data={cities}
                        baseColor='#000'
                        containerStyle={{
                            width: '85%',
                            left: '7.5%',
                            top: '-0.5%',
                        }}
                        onChangeText={(value) => {
                            setselectedCounty(value);
                            setshowThings(false);
                        }}
                    />

                    {showThings && (
                        <View>
                            <Image
                                source={require('../../assets/sadface.png')}
                            />
                            <NothingText>
                                Nenhum município selecionado.
                            </NothingText>
                        </View>
                    )}

                    {!showThings && (
                        <ViewCounty showsVerticalScrollIndicator={false}>
                            <CityTitle>{city_name}</CityTitle>
                            <CityUpdate>Atualizado em: {update}</CityUpdate>
                            <ViewCustom>
                                <Card
                                    title='Casos'
                                    info={cases}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos'
                                    info={deaths}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <Card
                                    title='Recuperados'
                                    info={recovered}
                                    color={colors.green}
                                />
                                <Card
                                    title='Suspeitos'
                                    info={suspectsTotal}
                                    color={colors.purple}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <Card
                                    title='Negativos'
                                    info={casesNegative}
                                    color={colors.green}
                                />
                                <Card
                                    title='Importados'
                                    info={imported_cases}
                                    color={colors.purple}
                                />
                            </ViewCustom>
                            <MediumTitle>Boletim Diário:</MediumTitle>
                            <ViewCustom>
                                <Card
                                    title='Casos Hoje'
                                    info={newCases}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos Hoje'
                                    info={newDeaths}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <MediumTitle>Suspeitos:</MediumTitle>
                            <ViewCustom>
                                <Card
                                    title='Em casa'
                                    info={suspectsHome}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Enfermaria'
                                    info={suspectsHospital}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <Card
                                    title='UTI'
                                    info={suspectsUti}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos'
                                    info={suspectsDeath}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                        </ViewCounty>
                    )}
                </CardContainer>
            </ContainerView>
        </>
    );
}
