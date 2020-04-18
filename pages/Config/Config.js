import React, { useState } from "react";
import { Modal, FlatList, StyleSheet, View, Switch } from 'react-native';
import { Linking } from 'expo';
import { Ionicons } from '@expo/vector-icons';

// Styled Components
import {
    Text,
    TextModal,
    Title,
    TitleModal,
    TextButton,
    ModalView,
    Link,
    ItemListDark,
    CenteredView,
    Container,
    OpenButton,
    ItemList,
    ModalContainer,
    Separator
} from './ConfigStyles'

// Custom Components
import Card from '../Components/Card/Card';
import { colors, setPrimary } from '../../styles/colors';

const data = {
    configs: [
        { id: 0, name: 'Sobre o aplicativo', icon: 'md-information-circle', description:
            <View>
                <TitleModal>Sobre o aplicativo</TitleModal>
                <TextModal>O Radar Corona é uma aplicação desenvolvida para informar dados sobre o COVID-19. {"\n"}{"\n"}Código: Fábio Costa e Hermany Vieira. {"\n"}Design : Ashley Nascimento e Fábio Costa.</TextModal>
                <TextModal>{"\n"}Versão: 1.0</TextModal>
            </View>
        },

        { id: 1, name: 'Links de Ajuda', icon: 'md-link', description:
        <View>
            <TitleModal>Links que fornecem ajuda:</TitleModal>
            <Link
                onPress={() => Linking.openURL('https://saude.gov.br/')}>
                Ministério da Saúde
            </Link>
            <Link
              onPress={() => Linking.openURL('https://coronavirus.saude.gov.br/')}>
                CoronaVírus Brasil
            </Link>
            <Link
              onPress={() => Linking.openURL('https://www.who.int/health-topics/coronavirus#tab=tab_1')}>
                OMS
            </Link>
            <Link
              onPress={() => Linking.openURL('https://www.saude.gov.br/boletins-epidemiologicos')}>
                Boletim epidemiológico Ministério da saúde
            </Link>
            <Link
              onPress={() => Linking.openURL('https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6')}>
                Johns Hopkins University Painel
            </Link>
        </View>
   },
        { id: 2, name: 'Telefones de Ajuda', icon: 'md-call', description:
        <View>
        <TitleModal>Telefones das Centrais de Ajuda:</TitleModal>
        <Link
            onPress={() => Linking.openURL(`tel:${'08008789628'}`)}>
            Central CoronaVírus Cruzeiro
        </Link>
        <Link
          onPress={() => Linking.openURL(`tel:${'31531466'}`)}>
                       Central CoronaVírus Lorena I
        </Link>
        <Link
          onPress={() => Linking.openURL(`tel:${'31529049'}`)}>
                       Central CoronaVírus Lorena II
        </Link>
    </View> },
        { id: 3, name: 'Faça uma Doação contra o COVID-19', icon: 'md-heart', description:
        <View>
            <TitleModal>Links para realizar uma doação:</TitleModal>
            <Link
              onPress={() => Linking.openURL('https://gerandofalcoes.com/coronanoparedao')}>
                Fundo emergencial da Gerando Falcões
            </Link>
            <Link
              onPress={() => Linking.openURL('https://secure.unicef.org.br/Default.aspx?origem=covid19')}>
                Unicef
            </Link>
            <Link
              onPress={() => Linking.openURL('https://www.bsocial.com.br/causa/fundo-emergencial-para-a-saude-coronavirus-brasil')}>
                Fundo Emergencial para a Saúde
            </Link>
            <Link
              onPress={() => Linking.openURL('https://www.charidy.com/juntostransformamos')}>
                #juntostransformamos
            </Link>
        </View>},
        { id: 4, name: 'Conheça os autores do Aplicativo', icon: 'md-code', description:
        <View>
            <TitleModal>Sobre os Desenvolvedores</TitleModal>
            <TextModal>Fábio Costa:</TextModal>
            <TextModal>Twitter: @srcossta</TextModal>
            <TextModal>Instagram: @fabioeduardo88</TextModal>
            <TextModal>{"\n"}Hermany Vieira:</TextModal>
            <TextModal>Instagram: @hermanyvieira</TextModal>
            <TextModal>{"\n"}Ashley Nascimento:</TextModal>
            <TextModal>Instagram: @imashyn</TextModal>
    </View>},
    ],
};

function FlatListItemSeparator() {
    return (
      <View
        style={{
          height: 10,
        }}
      />
    );
  }

  const styles = StyleSheet.create({
    card: {
        height: '100%',
        top: '2%',
        borderRadius: 15
    },
});

export default function Config() {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState(data.configs[1].name);
    const [switchValue, setSwitchValue] = useState(false);

    return (
        <>
            <Container>
            <Title>Configurações</Title>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <ModalView>
                        <ModalContainer>
                                {modalText}
                                <OpenButton
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <TextButton>Fechar</TextButton>
                                </OpenButton>
                            </ModalContainer>
                    </ModalView>
                </Modal>

                <CenteredView>
                <Card style={styles.card}>
                    <ItemListDark>
                        <Ionicons name='md-moon' color={colors.black} size={34} style={{left: '10%'}} />
                        <Text>Modo Escuro</Text>
                        <Switch
                            style={{left: '60%'}}
                            trackColor={{ false: "#767577", true: "#767577" }}
                            thumbColor={switchValue ? "#1c3496" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                setSwitchValue(!switchValue);
                                alert("Em construção!");
                            }}
                            value={switchValue}
                        />
                    </ItemListDark>
                    <Separator/>
                    <FlatList
                    data={data.configs}

                    renderItem={({item}) =>
                    <ItemList
                        onPress={() => {
                            setModalVisible(true);
                            setModalText(data.configs[item.id].description);
                        }}
                    >
                    <Ionicons name={item.icon} color={colors.black} size={34} style={{left: '10%'}} />
                    <Text id={item.id}>{item.name}</Text>
                    </ItemList>
                    }
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    />
             </Card>
                </CenteredView>
            </Container>
        </>
    );
}
