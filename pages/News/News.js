import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';

// Service
import getTopNewsBr from '../../utils/services/NewsBrService';

// Styled Components

// Components
import NewsCard from '../Components/Card/NewsCard';

//Styles
import styles from './NewsStyles';

export default function News() {

    const [data, setData] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await getTopNewsBr();
            setData(response);
        }
        fetchData();
    });

    return (
        <>
                <Text style={styles.title}>Últimas notícias</Text>
                <FlatList
                    data={data.articles}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <NewsCard
                                title={
                                    item.title
                                }
                                image={
                                    item.urlToImage
                                }
                                description={
                                    item.content
                                }
                                author={
                                    item.author
                                }
                                url={
                                    item.url
                                }
                                publishedAt={
                                    item.publishedAt
                                }
                            />
                    </View>
                    )}
                />
        </>
    );
}
