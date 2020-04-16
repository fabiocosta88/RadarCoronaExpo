import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        color: colors.white,
    },
    footercard: {
        height: '5%',
        width: '100%',
        backgroundColor: colors.primary,
    },
});
