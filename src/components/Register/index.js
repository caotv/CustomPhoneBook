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
        loading,
        error,
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
                        onChange({ name: "username", value });
                    }}
                    error={errors.username || error?.username?.[0]}
                />
                <Input
                    label="First name"
                    placeholder="Enter first name"
                    onChangeText={(value) => {
                        onChange({ name: "firstName", value });
                    }}
                    error={errors.firstName || error?.first_name?.[0]}
                />
                <Input
                    label="Last name"
                    placeholder="Enter last name"
                    onChangeText={(value) => {
                        onChange({ name: "lastName", value });
                    }}
                    error={errors.lastName || error?.last_name?.[0]}
                />
                <Input
                    label="Email"
                    placeholder="Enter email"
                    onChangeText={(value) => {
                        onChange({ name: "email", value });
                    }}
                    error={errors.email || error?.email?.[0]}
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
                    error={errors.password || error?.password?.[0]}
                />
            </View>

            <CustomButton
                primary
                title="Submit"
                onPress={onSubmit}
                loading={loading}
                disabled={loading}
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
