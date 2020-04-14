import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
// Service
import getTopNewsBr from '../../utils/services/NewsBrService';

// Styled Components

// Components
import Header from '../Components/Header/Header';
import NewsCard from '../Components/Card/NewsCard';
import Card from '../Components/Card/Card';

//Styles
import styles from './NewsStyles';

export default function News({ navigation }) {

    const [data, setData] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await getTopNewsBr();
            setData(response);
        }
        fetchData();
    });

    const open = () => {
        navigation.openDrawer();
    };

    return (
        <>
            <Header open={open} />
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

                    <Card style={styles.footercard}>
                        <Text style={styles.text}>
                            Fique atento às fake news, não compartilhe mentiras!
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignSelf: 'center',
                            }}
                        >
                            <Text style={styles.text}>Powered by </Text>
                            <Text
                                style={styles.text}
                                onPress={() =>
                                    Linking.openURL('https://newsapi.org/')
                                }
                            >
                                NEWSAPI.org
                            </Text>
                        </View>
                    </Card>
        </>
    );
}
