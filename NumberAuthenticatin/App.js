import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen1 from './screens/AuthScreen1';
import AuthScreen2 from './screens/AuthScreen2';
import Access from './screens/Access';

const Stack=createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Auth1" component={AuthScreen1} />
      <Stack.Screen options={{headerShown:false}} name="Auth2" component={AuthScreen2} />
      <Stack.Screen options={{headerShown:false}} name="Acess" component={Access} />
    </Stack.Navigator>
    </NavigationContainer>


    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
