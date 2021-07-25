import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();
    const [modalVisible, setModalVisible] = useState(true);
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

    return (
        <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
    );
}

export default Contacts;