import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Background = styled.View`
    background-color: ${colors.primary};
    width: 100%;
    padding-bottom: 75;
`;

export const Text = styled.Text`
    font-size: 18;
    text-align: center;
    color: ${colors.redPink};
`;

export const FooterCard = styled.Text`
    font-size: 14;
    text-align: center;
    color: ${colors.white};
`;

export const Title = styled.Text`
    font-size: 28;
    font-weight: bold;
    left: 5%;
    top: 1%;
    padding-bottom: 5%;
    color: ${colors.white};
    text-transform: uppercase;
    margin: 10px;
`;

export const PinkLabel = styled.View`
    height: 70px;
    width: 100%;
    background-color: ${colors.redPink};
    padding-top: 13px;
    margin-bottom: 10px;
`;

export const FakeNewsAlert = styled.Text`
    font-size: 15;
    color: ${colors.white};
    margin: 0 auto;
`;

export const LoadWraper = styled.View`
    margin-top: 50px;
`;
