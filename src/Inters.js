import {interstial_id} from '../data'
import React, { useMemo,useEffect, useState } from 'react';
import { Button } from 'react-native';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const adUnitId = interstial_id

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, [loaded]);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return (
    <Button
      title="Show Interstitial"
      onPress={() => {
        if (interstitial.loaded) {
            interstitial.show().catch(error => console.warn(error));
         }else{
            setLoaded(false)
         }
      }}
    />
  );
}