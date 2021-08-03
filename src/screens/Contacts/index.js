import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import { GlobalContext } from '../../context/Provider';


const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = useState(null);
    const { contactsState: { getContacts: { data, loading, error } }, contactsDispatch } = useContext(GlobalContext);


    useEffect(() => {
        getContacts()(contactsDispatch);
    }, [])

    useEffect(() => {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => {
                    toggleDrawer();
                }}>
                    <Icon type="MaterialCommunityIcons" name='menu' size={25} style={{ padding: 10 }} />
                </TouchableOpacity>
            )
        })
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            getSettings();
            getContacts()(contactsDispatch);
        }, [])
    );

    const getSettings = async () => {
        const sortPref = await AsyncStorage.getItem('SortBy');

        if (sortPref) {
            setSortBy(sortPref);
        }
    }



    return (
        <ContactsComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            loading={loading}
            data={data}
            sortBy={sortBy}
        />
    );
}

export default Contacts;