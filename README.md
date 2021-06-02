# Game of Dice

This is a command-line Game of Dice. A Simple JavaScript based node.js application which runs a dice based game to acheive a score between players.

### Node Version
Use node 15+ to run the code. 

### Run the code
First install all the dependency using `npm install`. This will install all the required packages.

Dependencies:
1. nodemon - Run code in development environment
2. readLine - To take user input

Run final version using:
> npm run start

Run dev version using:
> npm run dev

______

## Code Walkthrough and Files

The file structure goes like this

    Project
        |
        `index.js
        `game.js
        `package.json
        `components
            |
            `dice.js
            `player-list.js
            `player.js
        `utils
            |
            `index.js
            `random.js
            `readline.js

### `package.json`
Package.json contains basic information about the project in the JSON format.

### `index.js` - The main file
This is the main file of the code from where the execution starts. It initializes the Game instance and takes the game step by step.

### `game.js` - The game file
Game.js holds the Game class which has methods related to the overview of the Game.

### `components/dice.js`
This file contains the code for the dice. Probably the smallest code of all. It has just one method `roll` which returns the number if the dice is rolled. Each player has their own dice.

### `components/player-list.js`
Player List is the array of players which is used by the `game` class to itterate between players and pass the chance.

### `components/player.js`
This is a class of an individual player. It has methods related to one player.

### `utils/readline.js`
This is a utility function which enables us to read user input form command-line.

### `utils/random.js`
This is a utility function which returns a random number between two given numbers lowerLimit and upperLimit