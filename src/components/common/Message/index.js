import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
    primary,
    danger,
    success,
    disabled,
    message,
    info,
    retry,
    retryFn,
    onDismiss,
}) => {

    const [userDismissed, setDismissed] = useState(false);

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
        if (success) {
            return colors.success;
        }
        if (danger) {
            return colors.danger;
        }
        if (info) {
            return colors.secondary;
        }
    };

    return (
        <>
            {userDismissed ? null :
                < TouchableOpacity
                    style={[styles.wrapper, { backgroundColor: getBgColor() }]}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: colors.white }}>
                            {message}
                        </Text>
                        {retry && !typeof onDismiss === "function" && (
                            <TouchableOpacity onPress={retryFn}>
                                <Text style={{ color: colors.white }}>Retry</Text>
                            </TouchableOpacity>
                        )}

                        {typeof onDismiss === "function" && (
                            <TouchableOpacity onPress={() => {
                                setDismissed(true);
                                onDismiss();
                            }}>
                                <Text style={{ color: colors.white }}>X</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </TouchableOpacity>
            }
        </>
    );
};

export default Message;