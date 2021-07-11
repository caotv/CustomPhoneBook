import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Container from '../../components/common/container'
import Input from '../../components/common/Input';

const Login = () => {
    const [value, onChangeText] = useState('');
    return (
        <Container>
            <Input
                label="User name"
                value={value}
                onChangeText={(text) => onChangeText(text)}
                // error={'This is error'}
            />
             <Input
                label="Password"
                value={value}
                onChangeText={(text) => onChangeText(text)}
                icon={<Text>HIDE</Text>}
                iconPosition="right"
            />
        </Container>
    );
}

export default Login;