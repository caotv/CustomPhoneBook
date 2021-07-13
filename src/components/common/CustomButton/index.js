import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
    title,
    primary,
    secondary,
    danger,
    disabled,
    loading,
    onPress,
}) => {

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === "left") {
                return 'row';
            } else if (iconPosition === 'right') {
                return 'row-reverse';
            }
        }
    };

    const getBgColor = () => {
        if (disabled) {
            return colors.grey;
        }
        if (primary) {
            return colors.primary;
        }
        if (secondary) {
            return colors.secondary;
        }
        if (danger) {
            return colors.danger;
        }
    };

    const getTextColor = () => {
        return disabled ? colors.black : colors.white;
    };

    return (
        <TouchableOpacity
            style={[styles.wrapper, { backgroundColor: getBgColor() }]}
            disabled={disabled}
            onPress={onPress}
        >
            <View style={[styles.loaderSection]}>
                {loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary} />}
                {title && <Text style={{ color: getTextColor(), paddingLeft: loading ? 5 : 0 }}>{title}</Text>}
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;