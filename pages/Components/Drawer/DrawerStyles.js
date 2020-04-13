import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      top: 5
    },
    containertitle: {
        backgroundColor: '#A533FF',
        width: '100%',
        height: '7%',
        flexDirection: 'row'
      },
      title: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      left: '10%'
    },
    footer: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingLeft: 10,
        top: -5
      },
      containerfooter: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'#A533FF',
        flexDirection:'row',
        height:45
      },
      image: {
        width: 50,
         height: 50
      }
});
