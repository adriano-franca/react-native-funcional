import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Contador from './components/Contador'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Contador inicial={100} />
      <Text>Só pra ter certeza mesmo!!!!!!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
