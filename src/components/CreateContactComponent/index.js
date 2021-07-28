import React from 'react';
import { Image, Text } from 'react-native';
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE_URI } from '../../constants/general';
import styles from './styles';


const CreateContactComponent = ({
    onChangeText,
    form,
    onSubmit,
    loading,
    error,
}) => {
    return (
        <Container>
            <Image width={150} height={150} source={{ uri: DEFAULT_IMAGE_URI }} style={styles.imageView} />
            <Text style={styles.choseText}>Choose picture</Text>
            <Input
                label='First name'
                placeholder="Enter first name"
                value={form.firstName}
                onChangeText={(value) => {
                    onChangeText('firstName', value);
                }}
                error = {error?.first_name?.[0]}
            />
            <Input
                label='Last name'
                placeholder="Enter last name"
                value={form.lastName}
                onChangeText={(value) => {
                    onChangeText('lastName', value);
                }}
                error = {error?.last_name?.[0]}

            />
            <Input icon={
                <CountryPicker
                    withFilter
                    withFlag
                    countryCode={form.countryCode || undefined}
                    withCountryNameButton={false}
                    withCallingCode
                    withCallingCodeButton
                    withEmoji
                    onSelect={(v) => {
                        const cCode = v.cca2;
                        onChangeText('countryCode', cCode);
                    }}
                />}
                iconPosition='left'
                label='Phone number'
                value={form.phoneNumber}
                onChangeText={(value) => {
                    onChangeText('phoneNumber', value);
                }}
                style={{ paddingLeft: 10 }}
                placeholder="Enter phone number" 
                error = {error?.phoneNumber?.[0] || error?.country_code?.[0]}
                />

            <CustomButton
                loading={loading}
                disabled={loading}
                title={loading ? 'Requesting': 'Submit'}
                primary
                onPress={() => onSubmit()}
            />
        </Container>
    );
};

export default CreateContactComponent;
