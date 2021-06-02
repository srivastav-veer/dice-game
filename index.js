/**
 * Author: Veer Shrivastav
 * Date: 1st June 2021
 * 
 * The Game of Dice.
 * The "Game of Dice" is a multiplayer game where N players roll a 6 faced dice in a round-robin fashion. 
 * Each time a player rolls the dice, their points increase by the number (1 to 6) achieved by the roll.
 *   
 * As soon as a player accumulates M points they complete the game and are assigned a rank. 
 * Remaining players continue to play the game till they accumulate at least M points. 
 * The game ends when all players have accumulated at least M points.
 */

const Game = require('./game');

let gameInstance = new Game();
gameInstance.setTargetScore().then(() => {
    gameInstance.setPlayerNumber().then(() => {
        gameInstance.chooseRandomPlayerToStart().then (() => {
            gameInstance.start();
        });
    });
});