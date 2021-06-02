/**
 * Author: Veer Shrivastav
 * Date: 1st June 2021
 * 
 * Player List contains the list of players and manages the 
 * control of passing dice between each player.
 */

const { randomNumber } = require("../utils");
const Player = require("./player");

class PlayerList {
    constructor(numberOfPlayer, targetScore) {
        this.list = []; //The list of player
        this.gameTarget = targetScore; //Target score of the game.
        this.currentChance = 0; //Current Chance of Index
        this.completedPlayer = 0;

        for (let i = 0; i < numberOfPlayer; i++) {
            this.list[i] = new Player(i+1);
            this.list[i].setTargetScore(targetScore);
        }
    }
    
    /**
     * This method sets a random player to start off in the game.
     * By default the random player is player 1.
     */
    randomChance () {
        let selectedIndex = randomNumber(0,this.list.length-1);
        let i = selectedIndex;
        while (this.list[i].getNextPlayer() === null) {
            let currentPlayer = this.list[i];
            let nextPlayer =  (i+1 >= this.list.length) ? this.list[0] : this.list[i+1];
            currentPlayer.setNextPlayer(nextPlayer);
            i+=1;
            if (i >= this.list.length) { i = 0; }
        }
        return this.list[selectedIndex];
    }

    /**
     * @returns int: Total Number of Players in the game
     */
    getNumberOfPlayers () { return this.list.length }

    /**
     * @param {int} index - index of player list from which player must be returned
     * @returns Player - Player instance.
     */
    getPlayerAtIndex (index) {
        return this.list[index];
    }

    //This function prints rankings
    printRanking () {
        console.log('\nNew Ranking');
        this.list.sort((next, current) => {
            if (current.getCompleteStatus()) {
                return 0;
            }
            return current.getScore() - next.getScore();
        });
        this.list.forEach ((player) => {
            if (player.getScore() >= this.gameTarget && !player.getCompleteStatus()) {
                player.setCompleteStatus(true);
                this.completedPlayer++;
            }
            console.log('---------------------------------------------------------');
            console.log(`${player.getName()}\t\t${player.getScore()}\t\t${player.getCompleteStatus() ? 'Completed' : 'Playing'}`);
            console.log('---------------------------------------------------------');
        });
        if (this.completedPlayer >= this.list.length) {
            console.log('Game Ends Here!!!\nAll the players have completed the game.');
            process.exit();
        }
    }
}
 
module.exports = PlayerList;