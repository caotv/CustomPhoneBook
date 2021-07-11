import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppNavContainer from './src/navigation';
import GlobalProvider from './src/context/Provider';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};
