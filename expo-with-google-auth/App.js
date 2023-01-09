import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '406326098384-r7n1armujd66u5jdd2kset8l4brg2v02.apps.googleusercontent.com',
    // iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: '406326098384-e0ou7db5ndedom4gjj75it7us0kt12kt.apps.googleusercontent.com',
    webClientId: '406326098384-68fhjav802bfq1d79sqm7j0e2feamrpv.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
      style={{
        flex: 1,
        paddingTop: 100,
        marginTop: 100,
      }}
    />
  );
}