import React from 'react';

import { colors } from '../../../styles/colors';
// Libs
import { Header as ElementsHeader } from 'react-native-elements';

export default function Header({ open }) {
    return (
        <ElementsHeader
            leftComponent={{
                icon: 'menu',
                color: '#fff',
                onPress: () => open(),
            }}
            centerComponent={{
                text: 'Radar Corona',
                style: {
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold',
                    top: -1,
                },
            }}
            containerStyle={{
                backgroundColor: colors.primary,
                justifyContent: 'space-around',
                top: -24,
            }}
        />
    );
}
