import React, { Component } from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView, Dimensions} from 'react-native';
import NumberFormat from 'react-number-format';
import { CardViewWithIcon, CardView } from 'react-native-simple-card-view'

export default class covidBR extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: [],
          date: null
        };
      }
    
      componentDidMount() {
        fetch("https://coronavirus-19-api.herokuapp.com/countries/brazil")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

          var date = new Date().getDate(); //Current Date
          var month = new Date().getMonth() + 1; //Current Month
          var year = new Date().getFullYear(); //Current Year
          var hours = new Date().getHours(); //Current Hours
          var min = new Date().getMinutes(); //Current Minutes
          this.setState({
            //Setting the value of the date time
            date:
              date + '/' + month + '/' + year + ' às ' + hours + ':' + min,
          });
      }

      render() {
        const { error, isLoaded, data } = this.state;
        
        const miniCardStyle = {
          shadowColor       : '#000000',
          shadowOffsetWidth : 2,
          shadowOffsetHeight: 2,
          shadowOpacity     : 0.1,
          shadowRadius      : 5,
          bgColor           : '#ffffff',
          padding           : 5,
          margin            : 5,
          borderRadius      : 5,
          elevation         : 3,
          width             : (Dimensions.get("window").width / 3) - 10,
    };

    const miniCardStyle2 = {
      shadowColor       : '#000000',
      shadowOffsetWidth : 2,
      shadowOffsetHeight: 2,
      shadowOpacity     : 0.1,
      shadowRadius      : 5,
      bgColor           : '#ffffff',
      padding           : 5,
      margin            : 5,
      borderRadius      : 5,
      elevation         : 3,
      height            : 10,
      width             : (Dimensions.get("window").width / 2) - 10,
};
        if (error) {
          return <Text>Error: {error.message}</Text>;
        } else if (!isLoaded) {
          return <Text style={styles.loading}>Carregando...</Text>;
        } else {
          return (
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.container}>
                <Text style={styles.titulo}>CORONAVÍRUS - BRASIL</Text>

                 <View style={{flexDirection:"row"}}>
                 <CardViewWithIcon
                  androidIcon={ 'md-stats' }
                  withBackground={true}
                  iconColor={ '#fff' }
                  iconBgColor={ '#5d78ff'}
                  title={ 'Casos ' }
                  titleFontSize={18}
                  titlePaddingBottom={-60}
                  titlePaddingTop={-60}
                  content={  <NumberFormat value={data.cases} displayType={'text'} thousandSeparator={true} renderText={value => <Text style={styles.totalcasos}>{value}</Text>} />}
                  style={miniCardStyle}
                 />

                 <CardViewWithIcon
                    androidIcon={ 'md-close-circle' }
                    withBackground={true}
                    iconColor={ '#fff' }
                    iconBgColor={ '#fb397a'}
                    title={ 'Mortes' }
                    titleFontSize={18}
                    titlePaddingBottom={-60}
                    titlePaddingTop={-60}
                    content={  <NumberFormat value={data.deaths} displayType={'text'} thousandSeparator={true} renderText={value => <Text style={styles.totalmortes}>{value}</Text>} />}
                    style={miniCardStyle}
                   />

                  <CardViewWithIcon
                    androidIcon={ 'md-medkit' }
                    withBackground={true}
                    iconColor={ '#fff' }
                    iconBgColor={ '#1fbb87'}
                    title={ 'Curados' }
                    titleFontSize={18}
                    titlePaddingBottom={-60}
                    titlePaddingTop={-60}
                    content={  <NumberFormat value={data.recovered} displayType={'text'} thousandSeparator={true} renderText={value => <Text style={styles.totaldados}>{value}</Text>} />}
                    style={miniCardStyle}
                  />
                 </View>

                 <Text style={styles.subtitulo}>CORONAVÍRUS - HOJE</Text>

                 <View style={{flexDirection:"row"}}>
                 <CardViewWithIcon
                  androidIcon={ 'md-alert' }
                  withBackground={true}
                  iconColor={ '#fff' }
                  iconBgColor={ '#5d78ff'}
                  title={ 'Casos' }
                  titleFontSize={18}
                  titlePaddingBottom={-60}
                  titlePaddingTop={-60}
                  content={  <NumberFormat value={data.todayCases} displayType={'text'} thousandSeparator={true} renderText={value => <Text style={styles.totalcasos}>+{value}</Text>} />}
                  style={miniCardStyle2}
                 />

                 <CardViewWithIcon
                    androidIcon={ 'md-sad' }
                    withBackground={true}
                    iconColor={ '#fff' }
                    iconBgColor={ '#fb397a'}
                    title={ 'Mortes' }
                    titleFontSize={18}
                    titlePaddingBottom={-60}
                    titlePaddingTop={-60}
                    content={  <NumberFormat value={data.todayDeaths} displayType={'text'} thousandSeparator={true} renderText={value => <Text style={styles.totalmortes}>+{value}</Text>} />}
                    style={miniCardStyle2}
                   />
                 </View>

                 <Text style={styles.subtitulo}>MAIS DADOS</Text>

                 <View style={{flexDirection:"row"}}>
                 <CardViewWithIcon
                  androidIcon={ 'md-stats' }
                  withBackground={true}
                  iconColor={ '#fff' }
                  iconBgColor={ '#5d78ff'}
                  title={ 'Casos ' }
                  titleFontSize={18}
                  titlePaddingBottom={-60}
                  titlePaddingTop={-60}
                  content={  <NumberFormat value={data.cases} displayType={'text'} thousandSeparator={true} renderText={value => <Text style={styles.totalcasos}>{value}</Text>} />}
                  style={miniCardStyle}
                 />

                 <CardViewWithIcon
                    androidIcon={ 'md-close-circle' }
                    withBackground={true}
                    iconColor={ '#fff' }
                    iconBgColor={ '#fb397a'}
                    title={ 'Mortes' }
                    titleFontSize={18}
                    titlePaddingBottom={-60}
                    titlePaddingTop={-60}
                    content={  <NumberFormat value={data.deaths} displayType={'text'} thousandSeparator={true} renderText={value => <Text style={styles.totalmortes}>{value}</Text>} />}
                    style={miniCardStyle}
                   />

                  <CardViewWithIcon
                    androidIcon={ 'md-medkit' }
                    withBackground={true}
                    iconColor={ '#fff' }
                    iconBgColor={ '#1fbb87'}
                    title={ 'Curados' }
                    titleFontSize={18}
                    titlePaddingBottom={-60}
                    titlePaddingTop={-60}
                    content={  <NumberFormat value={data.recovered} displayType={'text'} thousandSeparator={true} renderText={value => <Text style={styles.totaldados}>{value}</Text>} />}
                    style={miniCardStyle}
                  />
                 </View>

                <Text style={styles.disclaimer}>Um novo dia começa na meia noite do fuso horário GMT+0, ou seja, um dia novo começa às 21:00 no horário de Brasília.</Text>
                <Text style={styles.creditos}>Aplicativo feito por: Fábio Costa / Twitter: @srcossta.</Text>
                
            </ScrollView>
          );
        }
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#393A3C',
    },
    titulo: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
      top: 15,
      paddingBottom: 40,
      textAlign: 'center'

    },
    subtitulo: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
      top: 25,
      textAlign: 'center',
      paddingBottom: 40,
    }, 
    dados: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    data: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    totalcasos: {
        color: '#5d78ff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 5
    },
    totaldados: {
        color: '#1fbb87',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 5
    },
    totalmortes: {
        color: '#fb397a',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 5
    },
    loading: {
        color: '#000',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    disclaimer: {
        position: 'absolute',
        bottom: 20,
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        paddingLeft: 20,
        paddingRight: 10
    },
    creditos: {
        position: 'absolute',
        bottom: 0,
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        paddingLeft: 20,
        paddingRight: 10
    },
    quad: {
        alignItems: 'center',
        marginRight:15,
        marginLeft:15,
        marginTop:10,
        paddingTop:20,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth: 1,
    },
    pais: {
        color: '#000',
        fontSize: 32,
        fontWeight: 'bold',
    },
    pais1: {
        color: '#000',
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 10
    },
    miniCardStyle: {
      
    }
});