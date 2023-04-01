import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Body from '../Components/Body'
import { useFonts } from "expo-font";
import fonts from '../../fonts'

export default function Home({ navigation }) {
  const [loaded] = useFonts({
    Poppins: fonts.poppins,
    "Poppins-Bold": fonts["poppins-bold"],
    "Poppins-Light": fonts["poppins-light"],
  });
  return (
    <View style={styles.body}>
      <Header />
      <Search />
      <Body navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#070D2D",
    fontFamily: "Poppins",
  },
});
