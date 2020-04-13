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
                <Text>Casos: {data.cases}</Text>
            </ContainerView>
        </>
    );
}
