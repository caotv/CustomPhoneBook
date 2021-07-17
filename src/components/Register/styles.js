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

    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
    },

    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
    },

    createSection: {
        flexDirection: 'row',
    },

    linkBtn: {
        paddingLeft: 17,
        color: colors.primary,
        fontSize: 17
    },

    infoText: {
        fontSize: 17
    }
})