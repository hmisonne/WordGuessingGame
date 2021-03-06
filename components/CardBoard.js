import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { FlatGrid } from 'react-native-super-grid';
import WordCard from './WordCard'
import WordInput from './WordInput'
import {cardList, playerInfo, roundInfo} from '../data'
import TeamScore from './TeamScore'

export default class CardBoard extends React.Component {
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
      const {wordSelection, roundInfo} = this.state
      const orangeCards = wordSelection.filter(card => card.cardColorId === 'orange')
      const purpleCards = wordSelection.filter(card => card.cardColorId === 'purple')
      return (
      <View style={styles.container}>
        <Text>
          Hello {playerInfo.playerName}!
        </Text>
        <Button
            title="New Clue"
            onPress={() => this.props.navigation.navigate('ClueForm',{
                roundInfo, 
                playerInfo,
            })}
        />    
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
              <WordCard
                key={item.cardId} 
                onSelectWord={() => this.onSelectWord(item.cardId)}
                word={item}
                clueMaster= {playerInfo.clueMaster}/>
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
  