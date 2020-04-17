import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
    },
    card: {
        height: 340,
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 10,
        top: '-1%',
    },
    titlecontainer: {
        left: '1%',
        right: '1%',
        width: '96%',
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        top: '0.5%',
    },
    title: {
        textAlign: 'center',
        top: '1%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: '45%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    date: {
        color: '#fff',
        fontSize: 12,
        left: '20%',
        textAlign: 'left',
        textAlignVertical: 'center',
    },
    containerfooter: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        height: '8%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
