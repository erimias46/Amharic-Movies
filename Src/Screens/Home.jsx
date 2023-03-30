import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView ,Image} from "react-native";
import data from '../Files/data.json'
import YoutubePlayer from 'react-native-youtube-iframe'
import axios from "axios";

const Home = () => {
    const [jsonData, setJsonData] = useState([]);
    

  useEffect(() => {
      setJsonData(data);
      
      
  }, []);

  return (
    <View style={styles.body}>
      {jsonData.map((item, index) => (
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: item.thumbnail,
            }}
          />
          <Text key={index} style={styles.heading}>
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    padding: 20,
    color: "red",
  },
    body: {
      marginTop:5,
    flex: 1,
    backgroundColor: "#070D2D",
  },
});