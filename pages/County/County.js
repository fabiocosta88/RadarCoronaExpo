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
                            <CityTitle>{data.city_name}</CityTitle>
                            <CityUpdate>
                                Atualizado em: {data.update}
                            </CityUpdate>
                            <ViewCustom>
                                <Card
                                    title='Casos'
                                    info={data.cases}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos'
                                    info={data.deaths}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <Card
                                    title='Recuperados'
                                    info={data.recovered}
                                    color={colors.green}
                                />
                                <Card
                                    title='Suspeitos'
                                    info={data.suspectsTotal}
                                    color={colors.purple}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <Card
                                    title='Negativos'
                                    info={data.casesNegative}
                                    color={colors.green}
                                />
                                <Card
                                    title='Importados'
                                    info={data.imported_cases}
                                    color={colors.purple}
                                />
                            </ViewCustom>
                            <MediumTitle>Boletim Diário:</MediumTitle>
                            <ViewCustom>
                                <Card
                                    title='Casos Hoje'
                                    info={data.newCases}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos Hoje'
                                    info={data.newDeaths}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <MediumTitle>Suspeitos:</MediumTitle>
                            <ViewCustom>
                                <Card
                                    title='Em casa'
                                    info={data.suspectsHome}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Enfermaria'
                                    info={data.suspectsHospital}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <Card
                                    title='UTI'
                                    info={data.suspectsUti}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos'
                                    info={data.suspectsDeath}
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
