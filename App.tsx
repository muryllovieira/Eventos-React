import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { helloDarthVader } from './src/functions/functions';

export default function App() {

  async function handlerHelloWorld() {
    console.log('hello world')
  }

  async function handlerPress(id: number) {
    console.log('pressionado', id)
  }

  return (
    <View style={styles.container}>
      <Text onPress={() => console.log("inline")}>Inline</Text>
      <Text onPress={handlerHelloWorld}>Handler Function</Text>
      <Text>Handler Function With Parameters</Text>
      <Text onPress={() => handlerPress(1)}>
        Open up App.tsx to start working on your app!</Text>

      <Text onPress={helloDarthVader}>
        Another File</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
