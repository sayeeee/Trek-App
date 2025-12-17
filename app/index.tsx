import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
//import Logo from '../assets/img/logo_dark.png'

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

const Home = () => {
  return (
    
    
    <View style={styles.container}>
         {/* { <Image source= {Logo} style = {styles.img}/> } */}
      <Text style = {[styles.title, {color: 'purple'}]}>The number 1</Text>
      <Text style={{marginTop:30, marginBottom:30}}>
          Reading list appwhddfgx
       </Text> 
       <View>
        <Text style = {styles.card}>
            Hello, this is a card bithc
            </Text>
    </View>
    
    <Link href="/feed" style = {styles.link}> Feed </Link>
    <Link href="/profile" style = {styles.link}> Profile page </Link>
    </View>
  )
}


export default Home

const styles = StyleSheet.create({
   container: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    //safe area view
    backgroundColor: '#121212',
   },
   title:{
    fontWeight: 'bold',
    fontSize: 28
   },
   img:{
    marginVertical: 20,
   },
   card:{
    backgroundColor : '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
   },
   link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    color: '#f5f2f2',
   }
})