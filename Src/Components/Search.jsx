import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [term, setTerm] = useState()
  const searchText = (query) => {
    console.log(query)
    setTerm(query)
  }
  return (
    <View>
      
      <View style={styles.inputdiv}>
        <Searchbar
          placeholder="Search Movies"
          onChangeText={searchText}
          
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  inputdiv: {
    marginHorizontal: 30,
    marginBottom:10
  }
  
});
