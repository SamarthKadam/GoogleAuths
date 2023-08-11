import { View, Text,StyleSheet,Image, TextInput} from 'react-native'
import React, { useRef } from 'react'
import { useState } from 'react'
import Button from '../utils/Button'
import { useNavigation } from '@react-navigation/native'
import { firebaseConfig } from '../config'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import firebase from 'firebase/compat/app'
import { Alert } from 'react-native'

export default function AuthScreen1() {
    const navigation=useNavigation();

    const[phonenumber,setPhonenumber]=useState('');
    const[verficationId,setVerficiationId]=useState('');
    const refcaptchaVerifier=useRef(null);


    const sendVerfication=()=>{
        const phoneProvider=new firebase.auth.PhoneAuthProvider();
        phoneProvider.verifyPhoneNumber(phonenumber,refcaptchaVerifier.current).then((data)=>{
            setVerficiationId(data);
            let id=data;
            navigation.replace('Auth2',{id,pNO:phonenumber})
        });
        setPhonenumber('');
    }


    const SendFn=()=>{

        sendVerfication();
    }

    function NumberHandler(text)
    {
        setPhonenumber(text);
    }





  return (
    <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal firebaseConfig={firebaseConfig} ref={refcaptchaVerifier}></FirebaseRecaptchaVerifierModal>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/pin.png')}></Image>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textBold}>Verify Your Number</Text>
            <Text style={styles.textPara}>Please enter your Country and Your Phone number</Text>
            <TextInput keyboardType='phone-pad' onChangeText={NumberHandler} style={styles.textinputD}></TextInput>
            <Button onPress={SendFn} style={styles.btnstyle}>SEND</Button>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:30,
        paddingVertical:50
    },
    imageContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'50%',
    },
    image:{
        width:172,
        height:172,
    },
    textContainer:{
        flexDirection:'column',
        alignItems:'center'
    },
    textBold:{
        color:'#877ECE',
        fontSize:22,
        fontWeight:'bold'
    },
    textPara:{
        color:'grey',
        marginTop:20,
        fontSize:16,
        fontWeight:'400',
        textAlign:'center'
    },
    textinputD:{
        backgroundColor:'#E8F6E9',
        height:40,
        width:240,
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:20,
        marginTop:80,
        borderRadius:8
    },
    btnstyle:{
        marginTop:30,
        backgroundColor:'#3FD382',
        borderRadius:5
    }
})