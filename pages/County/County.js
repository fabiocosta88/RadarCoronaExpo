import React, { useState, useEffect } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import NumberFormat from 'react-number-format';
import moment from "moment";
import tz from 'moment-timezone';

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
} from './CountyStyles';

import Card from './Card/Card';
import { Dropdown } from 'react-native-material-dropdown';

// Colors
import { colors } from '../../styles/colors';

export default function County() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getBrazilTotals();
            setData(response);
        }
        fetchData();
    }, []);

    let state = [{
        value: 'São Paulo',
      }];

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

    return (
        <>
            <ContainerView>
                <TitleContainer>
                    <Title>Municípios</Title>
                </TitleContainer>
                <CardContainer>
                    <Dropdown
                        label='Estado'
                        data={state}
                        fontSize={16}
                        baseColor='#000'
                        labelFontSize={18}
                        containerStyle={{width: '85%', left: '7.5%', paddingBottom: '2%'}}
                    />
                    <Dropdown
                        label='Município'
                        fontSize={16}
                        labelFontSize={18}
                        data={cities}
                        baseColor='#000'
                        containerStyle={{width: '85%', left: '7.5%'}}
                    />

                    <Image
                        style={styles.image}
                        source={require('../../assets/sadface.png')}
                    />
                    <Text style={styles.text}>Nenhum município selecionado</Text>
                </CardContainer>
            </ContainerView>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        width: 256,
        height: 256,
        top: '10%',
    },
    text: {
        textAlign: 'center',
        top: '15%',
        fontSize: 18,
        color: colors.black,
        fontWeight: 'bold'
    }
  });

