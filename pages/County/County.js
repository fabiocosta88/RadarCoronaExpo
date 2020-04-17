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
    NothingText
} from './CountyStyles';

import { colors } from '../../styles/colors'

import Card from './Card/Card';
import { Dropdown } from 'react-native-material-dropdown';

export default function County() {
    const [data, setData] = useState();
    const [selectedCounty, setselectedCounty] = useState('Nenhum');
    const [showThings, setshowThings] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await getValeTotals();
            setData(response.cities);
        }
        fetchData();
    }, []);

    let cities = [{
        value: 'Cruzeiro',
      }, {
        value: 'Cachoeira Paulista',
      }, {
        value: 'Guaratingueta',
      }, {
        value: 'Lavrinhas',
      }, {
        value: 'Lorena',
      }];

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
                        containerStyle={{width: '85%', left: '7.5%', top: '-0.5%'}}
                        onChangeText={(value)=> {
                            setselectedCounty(value);
                            setshowThings(false);
                        }}
                    />

                    {showThings &&
                        <View>
                            <Image
                                source={require('../../assets/sadface.png')}
                            />
                            <NothingText>
                                Nenhum município selecionado.
                            </NothingText>
                        </View>
                    }

                    {!showThings &&
                        <ViewCounty showsVerticalScrollIndicator={false}>
                            <CityTitle>
                                Cachoeira Paulista
                            </CityTitle>
                            <CityUpdate>Atualizado em: 10/10/2010 às 10:10</CityUpdate>
                            <ViewCustom>
                                <Card
                                    title='Casos'
                                    info={86}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos'
                                    info={4}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <Card
                                    title='Recuperados'
                                    info={12}
                                    color={colors.green}
                                />
                                <Card
                                    title='Suspeitos'
                                    info={69}
                                    color={colors.purple}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <Card
                                    title='Negativos'
                                    info={11}
                                    color={colors.green}
                                />
                                <Card
                                    title='Importados'
                                    info={4}
                                    color={colors.purple}
                                />
                            </ViewCustom>
                            <MediumTitle>Boletim Diário:</MediumTitle>
                            <ViewCustom>
                                <Card
                                    title='Casos Hoje'
                                    info={8}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos Hoje'
                                    info={2}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <MediumTitle>Suspeitos:</MediumTitle>
                            <ViewCustom>
                                <Card
                                    title='Em casa'
                                    info={63}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Enfermaria'
                                    info={11}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <Card
                                    title='UTI'
                                    info={8}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos'
                                    info={9}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                        </ViewCounty>
                    }

                </CardContainer>
            </ContainerView>
        </>
    );
}
