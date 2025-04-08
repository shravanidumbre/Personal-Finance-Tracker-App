import { View, Text, BackHandler, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import WebView from 'react-native-webview'
import { StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight || 50;
type Props = {}

const App = (props: Props) => {
  const webViewRef = useRef<WebView>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const handleBackButtonPress = () => {
      if (webViewRef.current) {
          webViewRef.current.goBack();
          return true;
      }
      return false;
  };

  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress);
  },[])
  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webViewRef}
        // source={{ uri: `http://192.168.31.87:5173/` }}
        source={{ uri: `https://finance-tracking-app-by-react.web.app/` }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        cacheEnabled={true}
        pagingEnabled={true}
        sharedCookiesEnabled={true}
        thirdPartyCookiesEnabled={true}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccessFromFileURLs={true}
        mixedContentMode='always'
        onMessage={(event) => {
          const data = event.nativeEvent.data;
          console.log('Received message from webview:', data);
          if ( !isLoggedIn && data === 'loginSuccess') {
            setIsLoggedIn(true);
          }
          if ( isLoggedIn && data === 'logoutSuccess') {
            setIsLoggedIn(false);
          }
        }}
        renderLoading={() => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
            <Text>Loading...</Text>
          </View>
        )}
        renderError={() => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Error loading page</Text>
          </View>
        )}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
          console.error('HTTP error: ', nativeEvent)
        }}
        userAgent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        />
    </View>
  )
}

export default App