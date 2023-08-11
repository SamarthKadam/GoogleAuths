import { GoogleSignin,GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useEffect,useState } from 'react';
import "expo-dev-client"
import Head from './Head';

export default function App() {

  GoogleSignin.configure({
    webClientId: '3605321586-frvqpto7fj7t5fvgqo3e9f9vhecj5shs.apps.googleusercontent.com',
  });

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  
const onGoogleButtonPress=async()=> {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const user_sign_in=auth().signInWithCredential(googleCredential);
  user_sign_in.then((user)=>{
    console.log(user);
  }).catch((err)=>{
    console.log(err);
  })
}

const signOut=async()=>{
  try{
    await GoogleSignin.revokeAccess();
    await auth().signOut();

  }catch(err)
  {
    console.log(err);
  }
}

  if (initializing) return null;

  if(!user)
  {
    return (<View style={styles.container}>
            <Head></Head>

            <GoogleSigninButton style={{width:300,height:65,marginTop:100,marginLeft:'10%'}} onPress={onGoogleButtonPress}></GoogleSigninButton>
             </View>)
  }



  return (<View style={styles.container}>
          <Head></Head>
          <View style={{marginTop:100,alignItems:'center'}}>
          <Text style={styles.text}>Hello {user.displayName}</Text>
          <Image style={{width:100,height:100,borderRadius:50,marginBottom:30}} source={{uri: user.photoURL}}></Image>
          <Button  title='Sign Out' onPress={signOut}></Button>
          </View>
  </View>)

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
  }
});
