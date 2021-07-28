import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    imageView: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
    },
    choseText: {
        alignSelf: 'center',
        color: colors.primary
    }
})