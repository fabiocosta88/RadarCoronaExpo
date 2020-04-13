import React from "react";
import {View, Text, Image, ScrollView} from 'react-native';

// Styled Components
import styles from "./CaresStyles";

// Custom Components
import Header from "../Components/Header/Header";
import Card from '../Components/Card/Card';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default function Cares({ navigation }) {
    const open = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Header open={open} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom : 300}}>
                <View style={styles.container}>
                        <Card style={styles.cardtitle}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.title}>O que é coronavírus? (COVID-19)</Text>
                            </View>
                        </Card>

                        <Card style={styles.cardbig}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.textbig}><B>COVID-19</B> é uma doença causada por um vírus da família dos coronavírus. Registros da doença iniciaram-se no ano de 2019, mas a identificação do agente causador e as consequências dessa infecção ocorreram somente em 2020.
                                </Text>
                            </View>
                        </Card>

                        <Card style={styles.cardtitle}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.title}>Como é transmitido?</Text>
                            </View>
                        </Card>

                        <Card style={styles.cardbig}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.textbig}>A transmissão dos coronavírus ocorre pelo <B>ar</B> ou por <B>contato com secreções contaminadas</B>, como:
                                gotículas de saliva, espirro, tosse, contato pessoal, como aperto de mão, contato com superfícies contaminadas, seguido de contato com a boca, nariz ou olhos.
                                </Text>
                            </View>
                        </Card>

                        <Card style={styles.cardtitle}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.title}>Quais os sintomas?</Text>
                            </View>
                        </Card>

                        <Card style={styles.cardbig}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.textbig}><B>Febre</B>, <B>cansaço</B> e <B>tosse seca</B> são os principais sintomas apresentados. {"\n"} Alguns indivíduos também têm dores no corpo, coriza, dor de garganta e diarreia. Além disso, segundo a OMS, uma em cada seis pessoas sente dificuldade para respirar.
                                </Text>
                            </View>
                        </Card>

                        <Card style={styles.cardtitle}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.title}>Como prevenir o contágio:</Text>
                            </View>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/cuidado1.png')}
                            />
                            <View style={styles.textcontainer}>
                                <Text style={styles.text}>Lave as mãos com água e sabão ou use álcool em gel.</Text>
                            </View>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/cuidado2.png')}
                            />
                            <Text style={styles.text}>Cubra o nariz e boca ao espirrar ou tossir.</Text>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/cuidado3.png')}
                            />
                            <Text style={styles.text}>Evite aglomerações se estiver doente.</Text>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/cuidado4.png')}
                            />
                            <Text style={styles.text}>Mantenha os ambientes bem ventilados.</Text>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/cuidado5.png')}
                            />
                            <Text style={styles.text}>Não compartilhe objetos pessoais.</Text>
                        </Card>

                        <Card style={styles.card}>
                            <Text style={styles.textbig}>A <B>Organização Mundial da Saúde</B> reforça que as medidas de isolamento social são a melhor alternativa pra conter a propagação do vírus.</Text>
                        </Card>
                    </View>
                </ScrollView>
        </>
    );
}
