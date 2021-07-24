import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Touchable, TouchableOpacity } from 'react-native';
import Container from '../../components/common/container';

const Contacts = () => {

    const { setOptions, toggleDrawer} = useNavigation();
    useEffect(() => {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => {
                    toggleDrawer();
                }}>
                    <Text style={{ padding: 10 }}>Nav</Text>
                </TouchableOpacity>
            )
        })
    }, []);

    return (
        <Container>
            <Text>Contacts page!</Text>
        </Container>
    );
}

export default Contacts;