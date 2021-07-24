import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeName';
import SideMenu from './SideMenu';


const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerType="slide" drawerContent={({ navigation }) => <SideMenu navigation={navigation} />}>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        </Drawer.Navigator >
    );
}

export default DrawerNavigator;