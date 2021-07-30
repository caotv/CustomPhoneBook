import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SettingComponent from '../../components/SettingComponent';

const Settings = () => {

    const [email, setEmail] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = useState(null);

    const saveSetting = (key, value) => {
        AsyncStorage.setItem(key, value);
        // console.log('Save setting', key + ' ' + value)
    }

    const useEffect = async () => {
        const user = await AsyncStorage.getItem('user');
        setEmail(JSON.parse(user).user.email);
        const sortPref = await AsyncStorage.getItem('SortBy');
        setSortBy(sortPref);
    }

    useEffect(() => {
        getSetting();
    }, [])


    const settingOptions = [
        { title: 'My Info', subTitle: 'Setup your profile', onPress: () => { } },
        { title: 'Accounts', subTitle: null, onPress: () => { } },
        {
            title: 'Default account for new contacts',
            subTitle: email,
            onPress: () => { },
        },
        { title: 'Contacts to display', subTitle: 'All contacts', onPress: () => { } },
        {
            title: 'Sort by',
            subTitle: sortBy,
            onPress: () => {
                setModalVisible(true);
            },
        },
        { title: 'Name format', subTitle: 'First name first', onPress: () => { } },
        { title: 'Import', subTitle: null, onPress: () => { } },
        { title: 'Export', subTitle: null, onPress: () => { } },
        { title: 'Blocked numbers', subTitle: null, onPress: () => { } },
        { title: 'About RNContacts', subTitle: null, onPress: () => { } },
    ];


    const prefArr = [
        {
            name: 'First Name',
            selected: sortBy === 'First Name',
            onPress: () => {
                saveSetting('SortBy', 'First Name');
                setSortBy('First Name');
                setModalVisible(false);
            }
        },
        {
            name: 'Last Name',
            selected: sortBy === 'Last Name',
            onPress: () => {
                saveSetting('SortBy', 'Last Name');
                setSortBy('Last Name');
                setModalVisible(false);
            }
        },

    ];

    return (
        <SettingComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            settingOptions={settingOptions}
            prefArr={prefArr}
        />
    );
}

export default Settings;