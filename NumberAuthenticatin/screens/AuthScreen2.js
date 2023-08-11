import { View, Text,StyleSheet,Image,TextInput,Alert} from 'react-native'
import React from 'react'
import firebase from 'firebase/compat/app'
import { useState } from 'react'
import Button from '../utils/Button'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'


let verficationId;
let phoneNo;
export default function AuthScreen2() {

    const navigation=useNavigation();
    const route=useRoute();
    // console.log("this is route params",route.params.verficationId)

    useEffect(()=>{
        verficationId=route.params.id;
        phoneNo=route.params.pNO;
    },[])


    // const verficationId=route.params.id;

    // console.log(verficationId);

    const [code,setCode]=useState('');

    const confirmCode=()=>{
        const credential=firebase.auth.PhoneAuthProvider.credential(verficationId,code)
        firebase.auth().signInWithCredential(credential).then(()=>{
            setCode('')
            navigation.replace('Acess');
        }).catch((err)=>{console.log(err)})
    }

    function codeHandler(text)
    {
        setCode(text);
    }


  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/mailbox.png')}></Image>
    </View>
    <View style={styles.textContainer}>
        <Text style={styles.textBold}>Verfication Code</Text>
        <Text style={styles.textPara}>Please enter code sent to <Text style={styles.numberCol}>{phoneNo}</Text></Text>
        <TextInput onChangeText={codeHandler} keyboardType='number-pad' style={styles.textinputD}></TextInput>
        <Button onPress={confirmCode} style={styles.btnstyle}>VERIFY</Button>
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
    },
    numberCol:{
        color:'#2FC674',
        fontWeight:'bold'
    }
})