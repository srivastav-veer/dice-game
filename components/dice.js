/**
 * Author: Veer Shrivastav
 * Date: 1 June 2021
 * 
 * Dice of the game. It rolls between 1 to 6
 */

const { randomNumber } = require("../utils");

class Dice {
    constructor() { }

    roll () {
        return randomNumber(1,6);
    }
}

module.exports = Dice;