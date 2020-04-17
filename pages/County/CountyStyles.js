import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

export const ViewCustom = styled.View`
    flex-direction: row;
`;

export const ViewCounty = styled.ScrollView`
    margin-top: 4%;
`;

export const ContainerView = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
`;

export const Image = styled.Image`
    align-self: center;
    width: 256;
    height: 256;
    top: 30%;
`;

export const MediumTitle = styled.Text`
    color: ${colors.black};
    top: -2%;
    text-align: center;
    font-size: 24;
    font-weight: bold;
`;

export const CityTitle = styled.Text`
    color: ${colors.black};
    top: -1.4%;
    text-align: center;
    font-size: 30;
    font-weight: bold;
`;

export const CityUpdate = styled.Text`
    color: ${colors.black};
    top: -2%;
    font-size: 20;
    text-align: center;
    font-size: 14;
    font-weight: bold;
`;

export const Text = styled.Text`
    color: ${colors.black};
    font-size: 20;
    text-align: center;
    font-size: 18;
    font-weight: bold;
`;

export const NothingText = styled.Text`
    color: ${colors.black};
    font-size: 20;
    top: 35%;
    text-align: center;
    font-size: 18;
    font-weight: bold;
`;

export const CardContainer = styled.View`
    background-color: ${colors.white};
    width: 100%;
    flex: 8;
    border-top-right-radius: 20;
    border-top-left-radius: 20;
`;

export const Title = styled.Text`
    font-size: 48;
    left: -5%;
    font-weight: bold;
    color: ${colors.white};
`;

export const TitleContainer = styled.View`
    flex: 1;
    display: flex;
    width: 80%;
    justify-content: flex-start;
`;
