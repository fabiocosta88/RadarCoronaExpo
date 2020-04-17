import styled from 'styled-components/native';

import { colors } from '../../../styles/colors';

export const handleColorType = (color) => {
    return color;
};

export const Label = styled.View`
    background-color: ${colors.white};
    width: 90%;
    margin: 0 auto;
    border-radius: 25px;
    height: 120px;
    margin-bottom: 20px;
`;

export const Casos = styled.Text`
    color: ${colors.black};
    font-weight: bold;
    font-size: 25;
    left: -5%;
`;

export const CasosNumber = styled.Text`
    color: ${({ color }) => handleColorType(color)};
    font-weight: bold;
    font-size: 37;
    left: -5%;
`;

export const DataContainer = styled.View`
    width: 75%;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    top: -73px;
`;

export const Color = styled.View`
    width: 2px;
    border: 2px solid ${({ color }) => handleColorType(color)};
    background-color: ${({ color }) => handleColorType(color)};
    height: 55px;
    margin-top: 35px;
    border-radius: 5px;
`;
