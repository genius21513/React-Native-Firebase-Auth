import React from 'react';
import './config/firebase';
import RootNavigation from './navigation';
import { ThemeProvider } from 'react-native-elements';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}