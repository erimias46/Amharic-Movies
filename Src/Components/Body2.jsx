import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const Body2 = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Text variant="headlineLarge">Movie Title</Text>
          <Text variant="bodyMedium">1:30 hour</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Text variant="headlineLarge">Movie Title</Text>
          <Text variant="bodyMedium">1:30 hour</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Text variant="headlineLarge">Movie Title</Text>
          <Text variant="bodyMedium">1:30 hour</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

export default Body2

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