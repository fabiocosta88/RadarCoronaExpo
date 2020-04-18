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
    font-size: 36;
    font-weight: bold;
    left: 5%;
    top: 1%;
    padding-bottom: 5%;
    color: ${colors.white};
`;

