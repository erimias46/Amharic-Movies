import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Src/Screens/Home';
import Details from './Src/Screens/Details';
import { Provider as PaperProvider, Provider } from "react-native-paper";

const Stack=createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false, // change this to `false`
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerShown: false, // change this to `false`
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070D2D",
   
  },
});
