import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';
import Message from '../common/Message';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { CREATE_CONTACT } from '../../constants/routeName';




const ContactsComponent = ({ modalVisible, setModalVisible, loading, data, sortBy }) => {

    const { navigate } = useNavigation();

    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                <Message message="No Contacts to show" info />
            </View>
        );
    };

    console.log("Data =>", data);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.wraper} >
                <View style={styles.contact}>
                    {/* <View style={styles.avatar}>
                        <Text style={{ color: colors.white }}>{item.first_name[0]}{item.last_name[0]}</Text>
                    </View> */}
                    <Image style={styles.avatar} source={{uri: item.contact_picture}}/>
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

    // console.log('data', data);

    return (
        <>
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
                            data={sortBy ? data.sort((a, b) => {
                                if (sortBy === 'First Name') {
                                    if (a.first_name < b.first_name) {
                                        return -1;
                                    } else {
                                        return 1;
                                    }
                                }
                                if (sortBy === 'Last Name') {
                                    if (a.last_name < b.last_name) {
                                        return -1;
                                    } else {
                                        return 1;
                                    }
                                }
                            }) : data}
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

            <TouchableOpacity style={styles.floatingBtn} onPress={() => { navigate(CREATE_CONTACT) }}>
                <Icon type='AntDesign' name='plus' size={24} style={{ color: colors.white }} />
            </TouchableOpacity>

        </>
    )
}

export default ContactsComponent
