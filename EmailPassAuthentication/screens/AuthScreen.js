import { View, StyleSheet,Image,TextInput, Alert} from 'react-native'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import React from 'react'
import Button from '../utils/Button'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../firebaseConfig'
import LoadingOverlay from '../components/LoadingOverlay'

export default function AuthScreen() {

    const auth=FIREBASE_AUTH;
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const[loading,setLoading]=useState(false);


    function setEmailHandler(emailtext)
    {
        setEmail(emailtext);
    }

    function setpasswordHandler(pass)
    {
        setPassword(pass);
    }



   function register()
    {
        if(!email&&!password)
        {
            Alert.alert('Please Check the inputs');
        }

       setLoading(true);
        console.log("clicke kello");
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          console.log("something");
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          Alert.alert(errorMessage)
          // ..
        }).finally(()=>{
          setLoading(false);
        })
    }

    function signIn()
    {
        if(!email&&!password)
        {
            Alert.alert('Please Check the inputs');
        }

            setLoading(true);
              signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          Alert.alert(errorMessage);
        }).finally(()=>{
          setLoading(false);
        });
          }


    if(loading)
    {
      return <LoadingOverlay istrue={1} >Loading</LoadingOverlay>
    }



  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={{height:84,width:84}} source={require('../assets/user.png')}></Image>
      </View>
      <View>
        <View style={styles.inputContainer}>
      <View ><TextInput placeholderTextColor='#A6ACB9' onChangeText={setEmailHandler} style={styles.thinTextInput} placeholder='email'></TextInput></View>
      <View style={styles.inputContainers} ><TextInput onChangeText={setpasswordHandler} placeholderTextColor='#A6ACB9' style={styles.thinTextInput} placeholder='password'></TextInput></View>
        </View>
      </View>
      <Button onPress={register} style={styles.buttonstyle}>Register</Button>
      <Button onPress={signIn} mod={1} style={styles.buttonstyle2}>sign in</Button>
    </View>
  )
}

const styles=StyleSheet.create({
    screen:{
      flex:1,
    //   backgroundColor:Color.primary800,
    backgroundColor:'white',
      paddingHorizontal:24,
      paddingTop:84,
    },
    statsBarContainer:{
      marginTop:34
    },
    imageContainer:{
        marginTop:'20%',
        flexDirection:'row',
        justifyContent:'center'
    },
    thinTextInput:{
        backgroundColor:'white',
        fontSize:20,
        fontWeight:'300',
        backgroundColor:'#EEEEEE',
        height:50,
        paddingHorizontal:15,
        borderRadius:20
      },
      inputContainer:{
        marginTop:'25%',
      },
      inputContainers:{
        marginTop:10
      },
      buttonstyle:{
        marginTop:12,
        position:'absolute',
        top:'80%',
        width:200,
        borderRadius:30,
        alignSelf:'center',
        backgroundColor:'#367EFF',
      },
      buttonstyle2:{
        marginTop:18,
        position:'absolute',
        color:'#367EF',
        top:'86%',
        width:200,
        borderRadius:30,
        alignSelf:'center',
      }
  })