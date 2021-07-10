import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppNavContainer from './src/navigation';
import GlobalProvider from './src/context/provider';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer>
      </AppNavContainer>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
