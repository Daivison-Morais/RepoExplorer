import React, {useState, useEffect, useCallback} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'
import { OpenSans_300Light, 
  OpenSans_400Regular, 
  OpenSans_600SemiBold, 
  OpenSans_500Medium } from '@expo-google-fonts/open-sans'
import { View } from 'react-native';
import Route from './src/routes';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(()=>{
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          OpenSans_300Light,
          OpenSans_400Regular,
          OpenSans_600SemiBold,
          OpenSans_500Medium
        })
      }catch{

      }finally{
        setAppIsReady(true)
      }
    })()
  }, [])

  const onLayout = useCallback(()=> {
    if(appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady])

  if(!appIsReady){
    return null;
  }

  return (
    <View onLayout={onLayout} style={{flex: 1}}>
      <Route/>
    </View>
  );
}
