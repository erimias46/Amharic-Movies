import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Body from '../Components/Body'


export default function Home({navigation}) {
  return (
    <View>
      <Header />
      <Search />
      <Body navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({})
