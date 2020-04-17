import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      top: '1%'
    },
    text: {
      color: '#000',
      fontSize: 18,
      textAlignVertical: 'center',
      left: 5,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    textcontainer:{
        width: 0,
        flexGrow: 1,
    },
    card: {
        padding: 10,
        margin: 10,
        height: '7%',
        flexDirection: 'row'
    },
    cardtitle: {
        margin: 5,
        height: '6%',
        flexDirection: 'row'
    },
    boldtext: {
        fontWeight: 'bold'
    },
    image: {
        height: 60,
        width: 60
    },
    cardbig: {
        padding: 10,
        margin: 10,
        height: '13%',
        flexDirection: 'row'
    },
    textbig: {
        color: '#000',
        fontSize: 16,
        textAlignVertical: 'center',
        textAlign: 'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        top: '30%'
    },
});
