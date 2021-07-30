import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_SUCCESS } from '../constants/actionTypes';
import { navigationRef } from './RootNavigator';


const AppNavContainer = () => {

    const { authState: { isLoggedIn }, authDispatch } = useContext(GlobalContext);


    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if (user) {
                authDispatch({
                    type: LOGIN_SUCCESS,
                    payload: JSON.parse(user),
                });
            }

        } catch (error) {
        }
    }


    useEffect(() => {
        getUser();
    }, [isLoggedIn])
    return (
        <NavigationContainer ref={navigationRef}>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default AppNavContainer;