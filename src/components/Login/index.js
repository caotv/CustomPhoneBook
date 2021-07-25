import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import { REGISTER } from '../../constants/routeName';
import Message from '../common/Message';


const LoginComponent = ({
    onChange,
    onSubmit,
    loading,
    errors,
    error,
}) => {
    const { navigate } = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return (
        <Container>
            <Image source={require('../../../src/assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Wellcome to RNContacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>
                {error && (<Message message={error.detail} onDismiss={() => { }} danger />)}

                <Input
                    label="User name"
                    placeholder="Enter user name"
                    onChangeText={(value) => {
                        onChange({ name: "username", value });
                    }}
                    error={errors.username}
                />
                <Input
                    label="Password"
                    placeholder="Enter password"
                    secureTextEntry={isSecureEntry}
                    icon={
                        <TouchableOpacity onPress={() => { setIsSecureEntry(!isSecureEntry) }}>
                            <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
                        </TouchableOpacity>
                    }
                    iconPosition="right"
                    onChangeText={(value) => {
                        onChange({ name: "password", value });
                    }}
                    error={errors.password}
                />
            </View>

            <CustomButton
                primary title="Submit"
                onPress={onSubmit}
                loading={loading}
                disabled={loading}
            />

            <View style={styles.createSection}>
                <Text style={styles.infoText}>Need a new account?</Text>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Go to register");
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
