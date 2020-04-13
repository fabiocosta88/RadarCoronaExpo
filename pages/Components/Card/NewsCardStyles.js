import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
      },
    card: {
        height: '17%',
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 10,
        top: '-3%'
    },
    titlecontainer:{
        left: '1%',
        right: '1%',
        width: '96%',
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        top: '0.5%'
      },
      title: {
        textAlign: 'center',
        top: '1%',
        fontSize: 19,
        fontWeight: 'bold',
      },
      image: {
          width: '100%',
          height: '45%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
      },
      author: {
        color: '#fff',
        fontSize: 12,
        left: '20%',
        textAlign: 'left',
        textAlignVertical: 'center',
      },
      date: {
        color: '#fff',
        fontSize: 12,
        left: '380%',
        textAlign: 'left',
        textAlignVertical: 'center',
      },
      containerfooter: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'#A533FF',
        flexDirection:'row',
        height: '8%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      },
});
