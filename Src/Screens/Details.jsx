import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YoutubeIframe from 'react-native-youtube-iframe'

const Details = ({navigation,route}) => {
  let id = route.params.id
  console.log(id)
   const [movies, setMovies] = useState([]);

   const fetch = async () => {
     try {
       const response = await axios.get(`http://192.168.1.7:3001/movies/${id}`);
       console.log(response.data)
       setMovies(response.data);
     } catch (err) {
       console.log(err);
     }
   };

   useEffect(() => {
     fetch();
   }, []);
  
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})