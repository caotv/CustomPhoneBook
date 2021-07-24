import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    logoImage: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 20
    },

    item: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },

    itemText: {
        fontSize: 17,
        paddingVertical: 7,
        paddingLeft: 20,
    }
})