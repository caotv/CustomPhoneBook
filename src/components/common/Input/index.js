import React from 'react';
import { View, Text, TextInput } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
    onChangeText,
    iconPosition,
    icon,
    style,
    value,
    label,
    error,
}) => {
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}

            <View
                style={[
                    styles.wrapper,
                ]}>
                <View>{icon && icon}</View>

                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>

            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

export default Input;