import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1';
import PeliculasProvider from './Context/PeliculasContext';


export default function App() {
  return (
    <PeliculasProvider>
      <NavigationContainer>
        <StackNavigation1/>
      </NavigationContainer>
    </PeliculasProvider>
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
