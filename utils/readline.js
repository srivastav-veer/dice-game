/**
 * Author: Veer Shrivastav
 * Date: 1 June 2021
 * 
 * This file is a utility function for accessing user input from commandline
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * readLine function.
 * 
 * @param {string} question - Question to be asked. Returns a promise which resolves to response
 */
module.exports = function (question) {
    return new Promise((resolve, reject) => {
        readline.question(question, answer => {
            resolve(answer);
        });
    });
}