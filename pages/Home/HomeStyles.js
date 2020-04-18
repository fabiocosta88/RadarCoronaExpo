import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

const handleOpacity = (opacity) => {
    return opacity;
};

export const ContainerView = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
`;

export const Text = styled.Text`
    color: ${colors.white};
    font-size: 20;
`;

export const CardContainer = styled.View`
    width: 100%;
    flex: 8;
`;

export const Title = styled.Text`
    font-size: 48;
    left: -5%;
    font-weight: bold;
    color: ${colors.white};
    opacity: ${({ opacity }) => handleOpacity(opacity)};
`;

export const GlobalTitle = styled.Text`
    font-size: 48;
    left: -5%;
    font-weight: bold;
    color: ${colors.white};
    opacity: ${({ opacity }) => handleOpacity(opacity)};
`;

export const TitleContainer = styled.View`
    flex: 2;
    display: flex;
    width: 80%;
    justify-content: flex-start;
`;

export const SubTitle = styled.Text`
    font-size: 28;
    left: -5%;
    color: ${colors.white};
`;

export const Updated = styled.Text`
    font-size: 16;
    left: -5%;
    color: ${colors.white};
`;

export const GlobalContainer = styled.View`
    width: 100%;
    padding-left: 45%;
    margin-top: -62px;
`;
