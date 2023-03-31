import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View>
      
      <View style={styles.inputdiv}>
        <TextInput style={styles.input} placeholder="Search Movies" />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  heading: {
    padding: 20,
    color: "red",
  },
  inputdiv: {
    backgroundColor: "white",
    borderRadius: 12,
  },
  input: {
    borderRadius: 12,
    borderColor: "white",
    color: "red",
  },
});
