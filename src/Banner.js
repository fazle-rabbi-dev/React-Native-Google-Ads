import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import {bannerId} from '../data'

export default function App() {
  return (
    <BannerAd
      unitId={bannerId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}