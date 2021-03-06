import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';

// Service
import getTopNewsBr from '../../utils/services/NewsBrService';

// Styled Components
import {
    Container,
    Title,
    Background,
    LoadWraper,
} from './NewsStyles';

// Components
import NewsCard from './Card/NewsCard';

// Colors
import { colors } from '../../styles/colors';

function emptyList() {
    return (
        <View>
            <LoadWraper>
                <ActivityIndicator size='large' color={colors.redPink} />
            </LoadWraper>
        </View>
    );
}

export default function News() {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await getTopNewsBr();
            setData(response);
        }
        fetchData();
    });

    return (
        <>
            <Background>
                <Title>Últimas notícias</Title>
                <FlatList
                    data={data}
                    ListEmptyComponent={emptyList}
                    renderItem={({ item }) => (
                        <Container>
                            <NewsCard
                                title={item.title}
                                image={item.urlToImage}
                                description={item.content}
                                author={item.author}
                                url={item.url}
                                publishedAt={item.publishedAt}
                            />
                        </Container>
                    )}
                />
            </Background>
        </>
    );
}
