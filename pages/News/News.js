import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Linking } from 'expo';
// Styled Components

// Components
import Header from "../Components/Header/Header";
import NewsCard from "../Components/Card/NewsCard";
import Card from "../Components/Card/Card";

//Styles
import styles from './NewsStyles';

const L = (props) => Linking.openURL('https://newsapi.org/')

export default function News({ navigation }) {
    const open = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Header open={open} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom : 2050}}>
                <View style={styles.container}>
                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <NewsCard
                    title={'Coronavírus: Últimas notícias e o que sabemos até esta segunda-feira (13)'}
                    image={'https://conteudo.imguol.com.br/c/noticias/a1/2020/04/08/presidente-jair-bolsonaro-ao-lado-do-ministro-da-saude-luiz-henrique-mandetta-durante-evento-em-brasilia-1586387628825_v2_615x300.jpg'}
                    description={'Enquanto o Brasil acompanha apreensivo a escalada dos casos de covid-19 em todos os estados, a condução da pandemia encontra abordagens diferentes de dois personagens principais no combate a nível nacional. Ontem, a divergência entre o presidente Jair Bolsona…'}
                    author={'UOL'}
                    url={'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/13/coronavirus-ultimas-noticias-e-o-que-sabemos-ate-esta-segunda-feira-13.htm'}
                    publishedAt={'2020-04-13 17:24:58'}
                    />

                    <Card >
                        <Text style={styles.text}>Fique atento às fake news, não compartilhe mentiras!</Text>
                        <View style={{flexDirection: 'row', alignSelf: 'center'}}><Text style={styles.text}>Powered by </Text><Text style={styles.text} onPress={ ()=> Linking.openURL('https://newsapi.org/') } >NEWSAPI.org</Text></View>
                    </Card>
                </View>
            </ScrollView>
        </>
    );
}
