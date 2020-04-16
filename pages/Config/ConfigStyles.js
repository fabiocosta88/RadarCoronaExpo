import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
       },
    item: {
        padding: 1
    },
    text: {
        fontSize: 24,
        left: '3%',
        padding: 8
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        left: '3%',
        top: '1%',
        paddingBottom: '5%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 15
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        fontSize: 16,
        textAlign: "center"
      },
      modalTitle: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: "center"
      },
      link: {
        color: 'blue',
        paddingBottom: 6,
        fontSize: 16,
        textAlign: 'center'
      }
});
