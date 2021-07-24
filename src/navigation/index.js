import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';


const AppNavContainer = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authLoaded, setAuthLoaded] = useState(false);


    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if (user) {
                setAuthLoaded(true);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }

        } catch (error) {

        }
    }

    const { authState: { isLoggedIn } } = useContext(GlobalContext);

    useEffect(() => {
        getUser();
    }, [])
    return (
        <>
            {authLoaded ? (
                <NavigationContainer>
                    {isLoggedIn || isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
                </NavigationContainer>)
                : (<ActivityIndicator />)
            }
        </>
    );
}

export default AppNavContainer;