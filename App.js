import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { FlatGrid } from 'react-native-super-grid';
import WordButton from './components/WordButton'
import WordInput from './components/WordInput'
import {cardList, playerInfo, roundInfo} from './data'
import TeamScore from './components/TeamScore'

export default class App extends React.Component {
  state = {
    wordSelection: cardList,
    roundInfo
  }
  onSelectWord = (cardId) => {
    const {wordSelection} = this.state

    wordSelection.map(word => {
      word.cardId !== cardId 
      ? word
      : word.cardGuessed = true
    })
    this.setState((prevState)=>({
      wordSelection
    }))
  }

  onSubmitClue = (clueGiven) => {
    this.setState((prevState) => ({
      roundInfo: {
        ...prevState.roundInfo,
        clueGiven
      } 
    }))
  }

  render(){
    return(
      this.renderCardBoard()
    )
  }
  
  renderCardBoard() {
    const {wordSelection, roundInfo} = this.state
    const orangeCards = wordSelection.filter(card => card.cardColorId === 'orange')
    const purpleCards = wordSelection.filter(card => card.cardColorId === 'purple')
    return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        WordGuess
      </Text>
      <Text>
        Hello {playerInfo.playerName}!
      </Text>
      {playerInfo.clueMaster &&
        <WordInput
          playerInfo= {playerInfo}
          roundInfo= {roundInfo}
          onSubmit = {this.onSubmitClue}
        />
      }
      <Text>Clue: {roundInfo.clueGiven}</Text>
        <TeamScore
          cards = {orangeCards}
          color='orange'
        />

        <TeamScore
          cards = {purpleCards}
          color='purple'
        /> 
        <FlatGrid
          itemDimension={100}
          data={wordSelection}
          style={styles.gridView}
          spacing={10}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.cardColorId }]}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>  
            )}
        />
      </View>
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
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


     

// {wordSelection.map(word => 
//   <WordButton
//     key={word.cardId} 
//     onSelectWord={() => this.onSelectWord(word.cardId)}
//     word={word}
//     clueMaster= {playerInfo.clueMaster}/>
//   )
//   }