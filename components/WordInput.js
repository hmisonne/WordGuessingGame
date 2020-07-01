import * as React from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';


export default class WordInput extends React.Component {
  state = {
    clue: ''
  }
  onChangeText = (text) => {
    this.setState({
        clue: text
      })
  }
  render() {
    const {clueMaster, teamPlaying} = this.props.roundInfo
    const {teamColor} = this.props.playerInfo

    const {clue} = this.state
    return (
      <View style={styles.container}> 
        <TextInput
            style={styles.textInput}
            onChangeText={text => this.onChangeText(text)}
            value={clue}
          />
          <Button
            title= 'Submit'
            style= {styles.button}
            onPress={() => this.props.onSubmit(clue)}
            disabled={clue === '' || teamPlaying !== teamColor}
            />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#ecf0f1',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
  },
  textInput : { 
    borderColor: 'gray', 
    borderWidth: 1, 
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});