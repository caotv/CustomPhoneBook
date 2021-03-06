import React from 'react';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';


const CreateContactComponent = ({
    onChangeText,
    form,
    onSubmit,
    loading,
    error,
    toggleValueChange,
    sheetRef,
    openSheet,
    closeSheet,
    onFileSelected,
    localFile,
}) => {

    return (
        <Container>
            <Image width={150} height={150} source={{ uri: localFile }} style={styles.imageView} />
            <TouchableOpacity onPress={openSheet}>
                <Text style={styles.choseText}>Choose picture</Text>
            </TouchableOpacity>
            <Input
                label='First name'
                placeholder="Enter first name"
                value={form.firstName}
                onChangeText={(value) => {
                    onChangeText('firstName', value);
                }}
                error={error?.first_name?.[0]}
            />
            <Input
                label='Last name'
                placeholder="Enter last name"
                value={form.lastName}
                onChangeText={(value) => {
                    onChangeText('lastName', value);
                }}
                error={error?.last_name?.[0]}

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
                error={error?.phoneNumber?.[0] || error?.country_code?.[0]}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10, alignItems: 'center'
            }}>
                <Text style={{ fontSize: 14 }}>Add to favorite</Text>
                <Switch
                    trackColor={{ false: 'blue', true: colors.primary }}
                    thumbColor={colors.white}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleValueChange()}
                    value={form.isFavorite}
                />
            </View>

            <CustomButton
                loading={loading}
                disabled={loading}
                title={loading ? 'Requesting' : 'Submit'}
                primary
                onPress={() => onSubmit()}
            />

            <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
        </Container>
    );
};

export default CreateContactComponent;
