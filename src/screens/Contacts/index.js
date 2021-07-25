import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Touchable, TouchableOpacity } from 'react-native';
import Container from '../../components/common/container';
import Icon from '../../components/common/Icon';

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();
    useEffect(() => {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => {
                    toggleDrawer();
                }}>
                    <Icon type="MaterialCommunityIcons" name='menu' size ={25} style={{ padding: 10 }} />
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