import React, { useState, useEffect } from 'react';

//Services
import getTopNewsBr from '../../utils/services/NewsBrService';

// Styled Components
import { ContainerView, Text } from './NewsStyles';

// Components
import Header from '../Components/Header/Header';

export default function News({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getTopNewsBr();
            console.log(response);
            setData(response);
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
                <Text>Artigos</Text>
            </ContainerView>
        </>
    );
}
