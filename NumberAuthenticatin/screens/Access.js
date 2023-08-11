import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Access() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are logged in!</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
  },
  text:{
    fontSize:20,
  }
})