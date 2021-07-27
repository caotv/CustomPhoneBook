import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Message from '../common/Message';



const ContactsComponent = ({ modalVisible, setModalVisible, loading, data }) => {

    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                <Message message="No Contacts to show" info />
            </View>
        );
    };

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity>
                <View>
                    
                </View>
            </TouchableOpacity>
        );
    }

    console.log('data', data);

    return (
        <View>
            <AppModal
                title="My Profile!"
                // modalFooter={
                //     <></>
                // }
                modalBody={
                    <View>
                        <Text>Hello from body</Text>
                    </View>
                }
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            {loading && (
                <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                    <ActivityIndicator color={colors.primary} size='large' />
                </View>
            )}
            {!loading && (<FlatList
                renderItem={renderItem}
                data={data}
                ListEmptyComponent={ListEmptyComponent}
                keyExtractor={(item) => String(item.id)}
            />)}
        </View>
    )
}

export default ContactsComponent
