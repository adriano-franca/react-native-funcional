import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import ContadorV2 from './components/contador/ContadorV2';
//import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatorio'
//import MinMax from './components/MinMax'
//import CompPadrao, { Comp1, Comp2 } from './components/Mult'
//import Primeiro from './components/Primeiro'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ContadorV2 />
      {/*
      <Pai />
      <Pai />
      <Contador inicial={100} />
      <Titulo principal="Cadastro Produto"
      secundario="Tela de Cadastro do Produto"/>
      <Aleatorio min={1} max={60}/>
      <MinMax min={3} max={20}/>
      <CompPadrao />
      <Botao />
      <Comp1 />
      <Comp2 />
      <Primeiro />
      <Text>Só pra ter certeza mesmo!!!!!!</Text>
      <StatusBar style="auto" />
      */}
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
