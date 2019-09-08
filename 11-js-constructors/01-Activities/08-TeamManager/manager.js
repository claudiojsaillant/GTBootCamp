inquirer = require('inquirer');
var y = 0
var x = 4;
var Player = function (name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        num = Math.round(Math.random());
        if (num === 1) {
            this.offense++
        }
        else {
            this.defense++
        }
    }
    this.badGame = function () {
        num = Math.round(Math.random());
        if (num === 1) {
            this.offense--
        }
        else {
            this.defense--
        }
    }
    this.printStats = function () {
        var arrayOfKeys = Object.keys(this);
        for (i = 0; i < arrayOfKeys.length - 3; i++) {
            console.log(arrayOfKeys[i] + ": " + this[arrayOfKeys[i]]);
        }
    }
}

var utilities = {
    players: [],
    playerSub: [],
    teamScore: 0,
    playAgain: function () {
        inquirer.prompt([
            {
                name: "ans",
                message: "What to keep playing?",
                type: 'list',
                choices: ['yes', 'no']
            }

        ]).then(function (answers) {
            if (answers.ans === 'yes') {
                createPlayers();
            }
            else {
                console.log('thanks for playing');
                return;
            }
        });
    },
    playGame: function () {

        teamOffensive = this.players[0].offense + this.players[1].offense;
        teamDefense = this.players[0].defense + this.players[1].defense;
        number1 = Math.round(Math.random() * 20);
        number2 = Math.round(Math.random() * 20);

        if (number1 < teamOffensive) {
            this.teamScore++;
        }
        if (number2 > teamDefense) {
            this.teamScore--;
        }
        inquirer.prompt([
            {
                name: "ans",
                message: "Do you want to swap your players?",
                type: 'list',
                choices: ['yes', 'no']
            }

        ]).then(function (answers) {
            if (answers.ans === 'yes') {
                temp = this.player[0]
                this.player[0] = this.playerSub[0];
                this.playerSub[0] = temp
                console.log('Players changed!');
                y++;
            }
            else {
                console.log('Alright, good luck.');
                y++;
            }

        });
    }
}

var createPlayers = function () {
    if (x > 1) {
        inquirer.prompt([
            {
                name: "name",
                message: "Whats the player name?"
            }, {
                name: "position",
                message: "What is the player current position?"
            }, {
                name: "offense",
                message: "How good is the player in offense? (0-10)"
            }, {
                name: "defense",
                message: "How good is the player in defense? (0-10)"
            }
        ]).then(function (answers) {
            var newPlayer = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
            newPlayer.printStats();
            if (x === 2) {
                utilities.playerSub.push(newPlayer);
                console.log(utilities.playerSub.length);
            }
            else {
                utilities.players.push(newPlayer);
            }

            x--;
            createPlayers();
        });
    }
    else {

        if (y < 5) {
            utilities.playGame();
        }
        if (utilities.teamScore > 0) {
            for (i = 0; i < utilities.players.length; i++) {
                utilities.players[i].goodGame();
            }
            console.log('Good Game!');
            utilities.players[0].printStats();
            console.log('================================');
            utilities.players[1].printStats();
            utilities.playAgain();
        }
        else if (utilities.teamScore < 0) {
            for (i = 0; i < utilities.players.length; i++) {
                utilities.players[i].badGame();
            }
            console.log('Bad Game!');
            utilities.players[0].printStats();
            console.log('================================');
            utilities.players[1].printStats();
            utilities.playAgain();
        }
        else {
            console.log('Draw ' + utilities.teamScore);
            utilities.playAgain();
        }
    }

}

createPlayers();
