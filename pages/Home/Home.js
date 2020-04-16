import React, { useState, useEffect } from 'react';

// Services
import getBrazilTotals from '../../utils/services/BrazilService';

// Styled Components
import { ContainerView, Text, CardContainer } from './HomeStyles';

import Header from '../Components/Header/Header';
import Card from './Card/Card';

export default function Home({ navigation }) {
    const [data, setData] = useState([]);
    const [updateDay, setUpdateDay] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await getBrazilTotals();
            setData(response.location);
        }
        fetchData();
    }, []);
    const open = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Header open={open} />
            <ContainerView>
                <CardContainer>
                    <Card
                        confirmed={data.latest.confirmed}
                        deaths={data.latest.deaths}
                    />
                </CardContainer>
                <Text>Ultima atualização:</Text>
                <Text>{data.last_updated}</Text>
            </ContainerView>
        </>
    );
}
