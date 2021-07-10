import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppNavContainer from './src/navigation';

export default function App() {
  return (
    <AppNavContainer>
    </AppNavContainer>
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
