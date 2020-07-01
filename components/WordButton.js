import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default function WordButton(props) {
  const word = props.word
  const clueMaster = props.clueMaster
  return (
    <View style={styles.container}>
      {clueMaster? 
        <TouchableOpacity
          style={[styles.button,{backgroundColor: word.cardColorId}]}
          >
          <Text>{word.name}</Text> </TouchableOpacity>
        : 
        <TouchableOpacity
          onPress={props.onSelectWord}
          enabled={!word.cardGuessed}
          style={!word.cardGuessed ? 
          styles.button
          : [styles.button,{backgroundColor: word.cardColorId} ] }
          >
          <Text>{word.name}</Text> 
        </TouchableOpacity>
        }
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
