import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from "react-native-paper";
const Header = () => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingtxt}>Hi Edwards</Text>
      <Avatar.Icon style={styles.Avatar} size={40} icon="account" />
    </View>
  );
}

export default Header

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-around",
  },
  headingtxt: {
    fontSize: 34,
    color: "white",
  },
  Avatar: {},
});