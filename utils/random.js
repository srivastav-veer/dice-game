/**
 * Author: Veer Shrivastav
 * Date: 1 June 2021
 * 
 * This file generates random number
 */

/**
 * Random Number Generator File.
 * 
 * @param {int} lowerLimit - Lower Limit of number which could be generated
 * @param {int} upperLimit - Upper Limit of number which could be generated
 */
module.exports = function (lowerLimit = 0, upperLimit = 999) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}