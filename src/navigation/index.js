import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';


const AppNavContainer = () => {
    const { authState: { isLoggedIn } } = useContext(GlobalContext);

    const state = useContext(GlobalContext);
    console.log('login: => ', isLoggedIn);
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default AppNavContainer;