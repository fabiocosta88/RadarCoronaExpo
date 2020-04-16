import styled from 'styled-components/native';

import { colors } from '../../../styles/colors';

export const ContainerView = styled.View`
    height: 500px;
    width: 350px;
    background-color: ${colors.lighterBlue};
    border-radius: 15px;
`;

export const Text = styled.Text`
    color: ${colors.white};
    font-size: 40;
    font-weight: bold;
    margin: 0 auto;
`;

export const TitleContainer = styled.View`
    font-size: 20;
    background-color: ${colors.darkerBlue};
    height: 90px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
`;

export const Label = styled.View`
    background-color: ${colors.darkerBlue};
    height: 80px;
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    padding-top: 5px;
`;

export const Casos = styled.Text`
    color: ${colors.white};
    font-weight: bold;
    font-size: 20;
    margin: 0 auto;
`;

export const CasosNumber = styled.Text`
    color: ${colors.yellow};
    font-weight: bold;
    font-size: 30;
    margin: 0 auto;
`;

export const DeathsNumber = styled.Text`
    color: ${colors.red};
    font-weight: bold;
    font-size: 30;
    margin: 0 auto;
`;
