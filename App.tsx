import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
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

      <TextInput
        style={{ fontSize: 32 }}
        placeholder='olá'
        onChange={() => console.log("onCharge executado")}
        onChangeText={() => console.log("onCharge Text acionado")}
        onFocus={() => console.log("USUARIO FOCOU NESSE COMPONENTE")}
        />

      <Text
        style={{ fontSize: 32 }}
        onPress={() => console.log("1 pressionado")}
        onPressIn={() => console.log("2 press in acionado")}
        onPressOut={() => console.log("3 press out acionado")}
        onLongPress={() => console.log("4 longpress acionando")}
        onTextLayout={() => console.log("TEXTO NO LAYOUT")}
      >
        component principal
      </Text>
      {/* <Text onPress={() => console.log("inline")}>Inline</Text>
      <Text onPress={handlerHelloWorld}>Handler Function</Text>
      <Text>Handler Function With Parameters</Text>
      <Text onPress={() => handlerPress(1)}>
        Open up App.tsx to start working on your app!</Text>

      <Text onPress={helloDarthVader}>
        Another File</Text> */}

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
