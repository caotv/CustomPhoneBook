import React from 'react';
import { TouchableOpacity, Text, Image, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Container from '../../components/common/container';
import { SETTINGS } from '../../constants/routeName';
import logoutUser from '../../context/actions/auth/logoutUser';
import styles from './styles';



const SideMenu = ({ navigation, authDispatch }) => {

    const handleLogout = () => {
        navigation.toggleDrawer();

        Alert.alert('Logout!', 'Are you sure to logout?', [
            {
                text: 'Cancel',
                onPress: () => {},
            },
            {
                text: 'OK',
                onPress: logoutUser()(authDispatch),
            }
        ])
    }

    const MenuItems = [
        {
            icon: <Text>T</Text>,
            name: 'Settings',
            onPress: () => {
                navigation.navigate(SETTINGS);
            },
        },
        {
            icon: <Text>T</Text>,
            name: 'Logout',
            onPress: handleLogout,
        },
    ];

    return (
        <SafeAreaView>
            <Container>
                <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
                <View style={{ paddingHorizontal: 70 }}>
                    {MenuItems.map(({ icon, name, onPress }) => (
                        <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
                            {icon}
                            <Text style={styles.itemText}>{name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Container>
        </SafeAreaView>
    );
}

export default SideMenu
