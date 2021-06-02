/**
 * Author: Veer Shrivastav
 * Date: 1st June 2021
 * 
 * Game Logic resides here. 
 */

const Dice = require('./components/player');
const PlayerList = require('./components/player-list');
const {readLine} = require('./utils');

class Game {
    constructor() {
        this.playerList = null; //Instance of Player List
        this.currentPlayer = null; //The current player rolling the dice
        this.targetScore = null; //The target score to reach

        console.log('\n\nWelcome to the Dice Game....');
        console.log('Press Ctrl+C to end the game and exit at any point of time.');
        console.log('Starting...\n\n');
    }

    /**
     * Function sets Total Score that has to be reached
     * @returns Promise as it is held for user input.
     */
    setTargetScore () {
        return new Promise ((resolve, reject) => {
            readLine('Set the score you want players to reach: ').then((score) => {
                this.targetScore = score;
                resolve();
            });
        });
    }

    /**
     * Function sets Total Number of Players
     * @returns Promise as it is held for user input.
     */
    setPlayerNumber () {
        return new Promise ((resolve, reject) => {
            readLine('How many players are going to play? ').then((numberOfPlayer) => {
                this.playerList = new PlayerList(numberOfPlayer, this.targetScore);
                resolve();
            });
        })
    }

    /**
     * Function chooses a random player
     * @returns Promise as it needs to first choose a random player before starting the game.
     */
    chooseRandomPlayerToStart() {
        return new Promise ((resolve, reject) => {
            console.log('Starting with random player...\n');
            this.currentPlayer = this.playerList.randomChance();
            console.log('The Game will start with ', this.currentPlayer.getName(),'\n');
            return resolve();
        });
    }

    /**
     * Function starts the game with the current player selected.
     */
    start () {
        // console.log('Current Player', this.currentPlayer, 'Next Player', this.currentPlayer.getNextPlayer());
        this.currentPlayer.roll().then(() => {
            this.playerList.printRanking();
            this.currentPlayer = this.currentPlayer.getNextPlayer();
            this.start();
        });
    }
}

module.exports = Game;