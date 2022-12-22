import {rewardInterId} from '../data'

import React, { useEffect, useState } from 'react';
import { Button,Alert } from 'react-native';
import {
  RewardedInterstitialAd,
  RewardedAdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.REWARDED_INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(rewardInterId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = rewardedInterstitial.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );
    const unsubscribeEarned = rewardedInterstitial.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        Alert.alert(`Hey, you have earned ${reward} credit!`)
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded interstitial ad straight away
    rewardedInterstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return (
     <>
       <Button
         title="Show Rewarded Interstitial Ad"
         onPress={() => {
           rewardedInterstitial.show();
         }}
       />
       <Button
         title="Refresh"
         color="seagreen"
         onPress={() => {
            setLoaded(false)
         }}
       />
    </>
  );
}