import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';

// Service
import getTopNewsBr from '../../utils/services/NewsBrService';

// Styled Components
import {
    Container,
    Title,
    Background,
    Text
} from './NewsStyles'

// Components
import NewsCard from './Card/NewsCard';

function emptyList() {
    return (
      <View>
          <Text>Poxa, parece que estamos enfrentando problemas com nossa fonte de notícias, mas estamos buscando a solução!</Text>
    </View>
    );
  }

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
            <Background>
                <Title>Últimas notícias</Title>
                <FlatList
                    data={data.articles}
                    initialNumToRender= {10}
                    ListEmptyComponent={emptyList}
                    renderItem={({ item }) => (
                        <Container>
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
                    </Container>
                    )}
                />
            </Background>
        </>
    );
}
