# Word Guessing Game

Word guessing game app for educational purpose

Word guessing games is one of my favorite game: 2 teams are competing against each other to guess a selection of words. At each round a clue master is giving a clue to his team to guess one word or a combination of words.

I am envisioning 3 tables: Games, Players and Rounds.

```
games = {
    gameId101 : {   
        gameId: gameId101
        redTeam: [playerId1, playerId2],
        blueTeam: [playerId3, playerId4]
        redTeamScore: 0,
        blueTeamScore: 2,
        currentRound: roundId11,
        words = [
            {
            cardId: 1,
            cardName: 'Pool',
            cardColor: 'Blue',
            cardGuessed: False
        }, {...}]
    },
    gameId102: {
        ...
        }
}
players = {
    playerId1 {
        playerId: playerId1,
        playerName: 'Henry',
        gameId: gameId101
    },
    playerId2 : {
        ...
    }
}
rounds = {
    roundId11: {
        roundId: roundId11,
        gameId: gameId101,
        teamPlaying: 'Blue',
        clueGiven: 'Ocean',
        numberOfCardsToGuess: 2,
        clueMaster: playerId1,
        guessers: [playerId2]
    }
}
```

The idea is that once a player joins a game:

He will be attributed a team color and a status (clueMaster or player) and he will see a selection of cards.
If he is a clue master he will be able to see the color of the cards. If it's his team turn, he can give a clue and a number of cards he wants his team to guess.
If he is a player and if it's his team turn, he will be able to see the clue from the clue master and the number of card to guess. He will be able to make a guess and select card(s).
