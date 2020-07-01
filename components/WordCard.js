import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function WordCard(props) {
  const card = props.word
  const clueMaster = props.clueMaster
  return (
    <View>
      {clueMaster? 
        <TouchableOpacity
          style={[styles.itemContainer, { backgroundColor: card.cardColorId }]}>
          <Text style={styles.itemName}>{card.name}</Text> 
        </TouchableOpacity>
      :
        <TouchableOpacity
          style={!card.cardGuessed ? 
            [styles.itemContainer, {backgroundColor: '#ccae72'}]
            : [styles.itemContainer, {backgroundColor: card.cardColorId} ] }
          onPress={props.onSelectWord}
          enabled={!card.cardGuessed}
          >
          <Text style={styles.itemName}>{card.name}</Text> 
        </TouchableOpacity>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
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