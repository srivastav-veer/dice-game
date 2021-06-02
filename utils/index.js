// let consoleStandard = console.log;
// console.log = function (params) {
//     consoleStandard('\n');
//     consoleStandard(params);
//     consoleStandard('\n');
// }

const readLine = require('./readline');
const randomNumber = require('./random');

module.exports = {
    readLine,
    randomNumber
};