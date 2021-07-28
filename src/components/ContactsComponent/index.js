import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import Message from '../common/Message';
import styles from './styles';



const ContactsComponent = ({ modalVisible, setModalVisible, loading, data }) => {

    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                <Message message="No Contacts to show" info />
            </View>
        );
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.wraper} >
                <View style={styles.contact}>
                    <View style={styles.avatar}>
                        <Text style={{ color: colors.white }}>{item.first_name[0]}{item.last_name[0]}</Text>
                    </View>
                    <View style={{ paddingLeft: 20 }}>
                        <View style={styles.itemName}>
                            <Text style={styles.name}>{item.first_name}</Text>
                            <Text style={styles.name}> {item.last_name}</Text>
                        </View>
                        <View>
                            <Text style={styles.phoneNumber}>{`${item.country_code} ${item.phone_number}`}</Text>
                        </View>
                    </View>
                </View>
                <Icon type="MaterialIcons" name="chevron-right" size={35} />
            </TouchableOpacity>
        );
    }

    console.log('data', data);

    return (
        <View style={{ backgroundColor: colors.white }}>
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
            {!loading && (
                <View style={{ paddingVertical: 20 }}>
                    <FlatList
                        renderItem={renderItem}
                        data={data}
                        ListEmptyComponent={ListEmptyComponent}
                        ItemSeparatorComponent={() => {
                            return <View style={{ height: 0.5, backgroundColor: colors.grey }}></View> 
                        }}
                        keyExtractor={(item) => String(item.id)}
                        ListFooterComponent={<View style={{ height: 150 }}></View>}
                    />
                </View>
            )}
        </View>
    )
}

export default ContactsComponent
