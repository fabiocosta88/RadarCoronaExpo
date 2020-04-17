import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

export const ContainerView = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    top: -30px;
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
    font-size: 50;
    font-weight: bold;
    color: ${colors.white};
`;

export const TitleContainer = styled.View`
    flex: 2;
    display: flex;
    width: 80%;
    justify-content: flex-start;
`;

export const SubTitle = styled.Text`
    font-size: 30;
    color: ${colors.white};
`;

export const Updated = styled.Text`
    font-size: 15;
    color: ${colors.white};
`;
