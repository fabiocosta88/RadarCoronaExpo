import React, { useState, useEffect } from "react";

// Services
import getGlobalTotals from "../../utils/services/GlobalService";

// Styled Components
import { ContainerView, Text } from "./HomeStyles";

import Header from "../Components/Header/Header";

export default function Home({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getGlobalTotals();
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
                <Text>Casos: {data.cases}</Text>
                <Text>Casos de hoje: {data.todayCases}</Text>
                <Text>Mortes: {data.deaths}</Text>
                <Text>Mortes de hoje: {data.todayDeaths}</Text>
            </ContainerView>
        </>
    );
}
