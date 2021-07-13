import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';

const LoginComponent = () => {
    const {navigate} = useNavigation();
    return (
        <Container>
            <Image source={require('../../../src/assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Wellcome to RNContacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>

                <Input
                    label="User name"
                    placeholder="Enter user name"
                // error={'This is error'}
                />
                <Input
                    label="Password"
                    placeholder="Enter password"
                    secureTextEntry={true}
                    icon={<Text>HIDE</Text>}
                    iconPosition="right"
                />
            </View>

            <CustomButton primary title="Submit" />

            <View style={styles.createSection}>
                <Text style={styles.infoText}>Need a new account?</Text>
                <TouchableOpacity
                    onPress = {() => {
                        navigate(REGISTER);
                    }}
                >
                    <Text style={styles.linkBtn}>Register</Text>
                </TouchableOpacity>
            </View>

        </Container>
    )
}

export default LoginComponent
