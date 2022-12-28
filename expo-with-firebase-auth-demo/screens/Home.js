import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';

export default function HomeScreen() {
  const { user } = useAuthentication();
  const auth = getAuth();

  async function _signOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('User signout error.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user?.email}!</Text>

      <Button title="Sign Out" style={styles.button} onPress={() => _signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10
  }
});