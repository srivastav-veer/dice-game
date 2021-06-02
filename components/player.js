/**
 * Author: Veer Shrivastav
 * Date: 1st June 2021
 * 
 * Player is an entity in the game. 
 * Methods related to each player is listed here.
 */

const {readLine} = require('../utils');
const Dice = require('./dice');

class Player {
    constructor(index) {
        this.name = `Player-${index}`;
        this.score = 0;
        this.lastThrow = null;
        this.dice = new Dice();
        this.nextPlayer = null;

        this.skipTurn = false;
        this.targetScore = 0;
        this.complete = false;
    }

    // @returns String: the name of the player. e.g. Player-1
    getName () { return this.name; }

    // @returns number: the score of the player.
    getScore () { return this.score; }

    // @returns number: the last throw of the player.
    getLastThrow () { return this.lastThrow; }

    //Sets target score for the player
    setTargetScore(target) { this.targetScore = target; }

    //get if complete or not
    getCompleteStatus () { return this.complete; }

    //set if complete or not
    setCompleteStatus (status) { this.complete = status; }

    //Get next player
    getNextPlayer () { return this.nextPlayer; }

    //Set the next player
    setNextPlayer (player) { this.nextPlayer = player }

    /**
     * @returns Promise - resolves with number or rejects.
     */
    rollDice () {
        return new Promise((resolve, reject) => {
            readLine('Press r to roll: ').then(cmd => {
                switch (cmd) {
                    case 'r': //dice rolled
                        return resolve (this.dice.roll());
                        break;
                    case 'exit': //exit command
                        process.exit();
                        break;
                    default:
                        return this.rollDice().then(resolve);
                        break;
                }
            });
        });
    }

    roll () {
        return new Promise ((resolve, reject) => {
            if (this.complete) {
                console.log(`${this.name} has already achieved the targetted score. Passing on...`);
                return resolve();
            }

            console.log(`\n\n${this.name} has the dice.`);
            console.log(`Total Score: ${this.score}`);
            console.log(`Last Roll: ${this.lastThrow}`,);

            if (this.skipTurn) {
                this.skipTurn = false;
                this.lastThrow = null;
                console.log('You need to skip the turn as you got two consecutive 1s. Sorry!');
                return resolve();
            } else {
                this.rollDice().then(number => {
                    console.log('rolled to...', number);
                    this.score += number; //Adding number to score.
                    if (this.score >= this.targetScore) {
                        console.log(`${this.name} completed the score.`);
                        return resolve();
                    }

                    if (number === 1 && this.lastThrow === 1) { //should skip next round
                        this.skipTurn = true;
                        console.log('You would need to skip the next turn as you got two consecutive 1s');
                    } else if (number === 6) {
                        console.log(`It's a SIX!!!!!`);
                        console.log(`Your turn again...`);
                        this.lastThrow = number;
                        return this.roll().then(resolve);
                    }

                    this.lastThrow = number;
                    console.log(`New Score of ${this.name}: `, this.score);
                    return resolve();
                });
            }
        });
    }
}

module.exports = Player;