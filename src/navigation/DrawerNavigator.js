import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeName';
import SideMenu from './SideMenu';
import { GlobalContext } from '../context/Provider';


const DrawerNavigator = () => {

    const { authDispatch, authState: { loading, error, isLoggedIn, } } = useContext(GlobalContext);

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerType="slide" drawerContent={({ navigation }) => <SideMenu navigation={navigation} authDispatch={authDispatch} />}>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        </Drawer.Navigator >
    );
}

export default DrawerNavigator;