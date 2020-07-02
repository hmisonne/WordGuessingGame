import 'react-native-gesture-handler';
import * as React from 'react';
import ClueForm from './components/ClueForm'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardBoard from './components/CardBoard'

const Stack = createStackNavigator()

export default class App extends React.Component {
  

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Word Guessing Game" component={CardBoard} />
          <Stack.Screen name="ClueForm" component={ClueForm} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
  
}

