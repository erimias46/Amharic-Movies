import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Src/Components/Header';
import Home from './Src/Screens/Home';
import { Provider as PaperProvider, Provider } from "react-native-paper";
import Body from './Src/Components/Body';
import Search from './Src/Components/Search';

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Header />
        <Search />
        {/* <Home /> */}
        <Body />
      <StatusBar style="auto" />
    </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070D2D",
   
  },
});
