import * as React from 'react';
import { Text, View } from 'react-native';


export default function TeamScore(props) {
  const cardsTotal = props.cards.length
  const cardsGuessed = props.cards.filter(card => card.cardGuessed === true).length
  const color = props.color
  return (
    <View>
      <Text>Team {color} Score: {cardsGuessed}/{cardsTotal}</Text>
    </View>
  );
}
