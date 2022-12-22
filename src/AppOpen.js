import React, { useState,useEffect } from 'react'
import { View, Text } from 'react-native'
import { AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';
import {appOpenId} from '../data'
const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const appOpenAd = AppOpenAd.createForAdRequest(appOpenId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});


export default function AppOpen() {
  const [loaded,setLoaded] = useState(false)
  
  useEffect(() => {
     const unsubscribeLoaded = appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
       setLoaded(true);
     });
     
     appOpenAd.load();
     //appOpenAd.show();
  },[]);
  
  if (!loaded) {
     return null
  }
  if(loaded){
     appOpenAd.show();
  }
  
  return (
    <View>
      <Text>AppOpen</Text>
    </View>
  )
}
