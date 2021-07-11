import React, { useState } from 'react';
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
    ...props
}) => {

    const [focused, setFocus] = useState(false);

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === "left") {
                return 'row';
            } else if (iconPosition === 'right') {
                return 'row-reverse';
            }
        }
    };

    const getBorderColor = () => {
        if (focused) {
            return colors.primary;
        }
        if (error) {
            return colors.danger;
        } else {
            return colors.grey;
        }
    };

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}

            <View
                style={[
                    styles.wrapper,
                    { borderColor: getBorderColor() },
                    { flexDirection: getFlexDirection() }
                ]}>
                <View>{icon && icon}</View>

                <TextInput
                    style={[
                        styles.textInput,
                        style
                    ]}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    {...props}
                />
            </View>

            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

export default Input;