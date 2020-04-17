import React, { useState } from "react";
import {View, Text, Modal, TouchableHighlight, FlatList, TouchableOpacity} from 'react-native';
import { Linking } from 'expo';

// Styled Components
import styles from "./ConfigStyles";

// Custom Components
import Card from '../Components/Card/Card';

const data = {
    configs: [
        { id: 0, name: 'Sobre o aplicativo', description:
            <View>
                <Text style={styles.modalTitle}>Sobre o Radar Corona</Text>
                <Text style={styles.modalText}>O Radar Corona é uma aplicação fornecida por: Fábio Costa e Hermany Vieira.</Text>
                <Text style={styles.modalText}>Versão: 1.0</Text>
            </View>
        },

        { id: 1, name: 'Links de Ajuda', description:
        <View>
            <Text style={styles.modalTitle}>Links que fornecem ajuda:</Text>
            <Text
                style={styles.link}
                onPress={() => Linking.openURL('https://saude.gov.br/')}>
                Ministério da Saúde
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://coronavirus.saude.gov.br/')}>
                CoronaVírus Brasil
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://www.who.int/health-topics/coronavirus#tab=tab_1')}>
                OMS
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://www.saude.gov.br/boletins-epidemiologicos')}>
                Boletim epidemiológico Ministério da saúde
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6')}>
                Johns Hopkins University Painel
            </Text>
        </View>
   },
        { id: 2, name: 'Telefones de Ajuda', description:
        <View>
        <Text style={styles.modalTitle}>Telefones das Centrais de Ajuda:</Text>
        <Text
            style={styles.link}
            onPress={() => Linking.openURL(`tel:${'08008789628'}`)}>
            Central CoronaVírus Cruzeiro
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(`tel:${'31531466'}`)}>
                       Central CoronaVírus Lorena I
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(`tel:${'31529049'}`)}>
                       Central CoronaVírus Lorena II
        </Text>
    </View> },
        { id: 3, name: 'Faça uma Doação contra o COVID-19', description:
        <View>
            <Text style={styles.modalTitle}>Links para realizar uma doação:</Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://gerandofalcoes.com/coronanoparedao')}>
                Fundo emergencial da Gerando Falcões
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://secure.unicef.org.br/Default.aspx?origem=covid19')}>
                Unicef
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://www.bsocial.com.br/causa/fundo-emergencial-para-a-saude-coronavirus-brasil')}>
                Fundo Emergencial para a Saúde
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://www.charidy.com/juntostransformamos')}>
                #juntostransformamos
            </Text>
        </View>},
        { id: 4, name: 'Conheça os autores do Aplicativo', description:
        <View>
            <Text style={styles.modalTitle}>Sobre os Desenvolvedores</Text>
            <Text style={styles.modalText}>Fábio Costa:</Text>
            <Text style={styles.modalText}>Twitter: @srcossta</Text>
            <Text style={styles.modalText}>Instagram: @fabioeduardo88</Text>
            <Text style={{fontSize: 16, textAlign: "center", paddingTop: 10}}>Hermany Vieira:</Text>
            <Text style={styles.modalText}>Instagram: @hermanyvieira</Text>
    </View>},
    ],
};

function FlatListItemSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: "90%",
          left: '5%',
          backgroundColor: "#000",
        }}
      />
    );
  }

export default function Config() {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState(data.configs[1].name);

    return (
        <>
            <View style={styles.container}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {modalText}

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Fechar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <Card style={styles.card}>
                    <Text style={styles.title}>Configurações</Text>

                    <FlatList
                    data={data.configs}
                    renderItem={({item}) =>
                    <TouchableOpacity
                        onPress={() => {
                            setModalVisible(true);
                            setModalText(data.configs[item.id].description);
                        }}
                    >
                        <Text id={item.id} style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    />
             </Card>

            </View>
        </>
    );
}
