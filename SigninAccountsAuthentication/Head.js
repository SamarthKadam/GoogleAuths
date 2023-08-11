import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function Head() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:18}}>Auth using Google</Text>
      <Image style={{height:50,width:50}} source={require('./assets/search.png')}></Image>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  }
})