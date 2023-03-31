import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text ,Image} from "react-native-paper";
import axios from "axios";

const Body = () => {
    const [movies, setMovies] = useState([])
    const fetch = async () => {
      try {
        const response = await axios.get("http://192.168.1.7:3001/movies");
          console.log(response.data);
          setMovies(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    
    
    useEffect(() => {
        fetch()
        
    },[])
    return (
      <ScrollView>
        <View style={styles.container}>
      {movies.map((movie, index) => (
        <Card style={styles.card} key={index}>
          <Card.Cover source={{ uri: movie.thumbnail }} />
          <Card.Content>
            <Text variant="bodySmall">{movie.title}</Text>
            <Text variant="bodyMedium">1:30 hour</Text>
          </Card.Content>
        </Card>
      ))}

      
    </View>    
      </ScrollView>
    
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  card: {
    width: "48%",

    backgroundColor: "#ccc",
    marginBottom: 20,
  },
});
