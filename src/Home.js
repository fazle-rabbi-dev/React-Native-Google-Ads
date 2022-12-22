import { 
   View,Text,Button
   
} from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Button
         title="Banner Ad"
         color="#784beb"
         onPress={()=>navigation.navigate('BannerAd')}
      />
      <Button
         title="Reward Ad"
         color="red"
         onPress={()=>navigation.navigate('RewardAd')}
      />
      <Button
         title="Interstial Ad"
         color="green"
         onPress={()=>navigation.navigate('IntersAd')}
      />
      <Button
         title="App Open Ad"
         color="purple"
         onPress={()=>navigation.navigate('AppOpenAd')}
      />
      <Button
         title="Reward Interstial Add"
         color="blue"
         onPress={()=>navigation.navigate('RewardInterstial')}
      />
    </View>
  )
}
