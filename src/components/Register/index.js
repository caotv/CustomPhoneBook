import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import { LOGIN } from '../../constants/routeName';

const RegisterComponent = (
    {
        onSubmit,
        onChange,
        form,
        errors,
    }
) => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <View>
                <Text style={styles.title}>Wellcome to RNContacts</Text>
                <Text style={styles.subTitle}>Create free account</Text>
                <Input
                    label="User name"
                    placeholder="Enter user name"
                    onChangeText={(value) => {
                        onChange({ name: "userName", value });
                    }}
                    error={errors.userName}
                />
                <Input
                    label="First name"
                    placeholder="Enter first name"
                    onChangeText={(value) => {
                        onChange({ name: "firstName", value });
                    }}
                    error={errors.firstName}
                />
                <Input
                    label="Last name"
                    placeholder="Enter last name"
                    onChangeText={(value) => {
                        onChange({ name: "lastName", value });
                    }}
                    error={errors.lastName}
                />
                <Input
                    label="Email"
                    placeholder="Enter email"
                    onChangeText={(value) => {
                        onChange({ name: "email", value });
                    }}
                    error={errors.email}
                />
                <Input
                    label="Password"
                    placeholder="Enter password"
                    secureTextEntry={true}
                    icon={<Text>HIDE</Text>}
                    iconPosition="right"
                    onChangeText={(value) => {
                        onChange({ name: "password", value });
                    }}
                    error={errors.password}
                />
            </View>

            <CustomButton
                primary
                title="Submit"
                onPress={onSubmit}
            />

            <View style={styles.createSection}>
                <Text style={styles.infoText}>Need a new account?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigate(LOGIN);
                    }}
                >
                    <Text style={styles.linkBtn}>Login</Text>
                </TouchableOpacity>
            </View>

        </Container>
    )
}

export default RegisterComponent
