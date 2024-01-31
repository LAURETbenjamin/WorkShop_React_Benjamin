import { React } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ButtonNew } from './componants/buttons.js'
import { Home } from './componants/home.js'
import { Screen2 } from './componants/screen2.js';
import { Screen1 } from './componants/sreen1.js';

const Stack = createNativeStackNavigator();

export default function App() {

  const onTap = () => {
    console.log("bonjour");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="screen1" component={Screen1}/>
        <Stack.Screen name="screen2" component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'grey',
    borderColor: 'grey',
    borderWidth: 10,
    borderRadius: 15,
    marginTop: 20
  },
  input: {
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 20
  }
});
