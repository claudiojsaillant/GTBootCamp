var inquirer = require('inquirer');
var digitalPal = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry) {
            console.log('That was yummy!');
            this.hungry = false;
        }
        else {
            console.log("No thanks I'm full");
        }
    }
    this.sleep = function () {
        if (this.sleep) {
            console.log('Zzzzzzzzzzz');
            this.sleepy = false;
            this.bored = true;
            this.increaseAge()
        }
        else {
            console.log("No way! I'm not tired");
        }
    }
    this.play = function () {
        if (this.bored) {
            console.log("Yay, Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log('Not right now. Later?')
        }
    }
    this.increaseAge = function () {
        this.age = this.age + 1;
        console.log("Happy Birthday to me! I am " + this.age + " years old!")
    }
}

var dog = new digitalPal();
dog.outside = false;
dog.bark = function () {
    console.log('Woof! Woof!');
}
dog.goOutside = function () {
    if (!this.outside) {
        console.log('Yay, I love outdoors');
        this.outside = true; //check
    }
    else {
        console.log("We're already outside though")
    }
}
dog.goInside = function () {
    if (this.outside) {
        console.log('Do we have to.. fine.');
    }
    else {
        console.log("I'm already inside.")
    }
}


var cat = new digitalPal();
cat.houseCondition = 100;
cat.meow = function () {
    console.log('Meow! Meow!');
}
cat.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        console.log('HAHHAAHHAH! Take this furniture!');
        this.houseCondition = this.houseCondition - 10;
        this.bored = false;
        this.sleepy = true;
    }
}
cat.buyNewFurniture = function () {
    this.houseCondition = this.houseCondition + 50;
}

// Created a series of questions
inquirer.prompt([

    {
        type: "list",
        name: "whichAnimal",
        message: "Who you want to play with?",
        choices: ["dog", "cat"]
    }
]).then(function (user) {
    var theAnimal;
    if(user.whichAnimal === 'dog'){
        theAnimal = dog;
    }
    else{
        theAnimal = cat;
    }
    console.log(theAnimal);
    // inquirer.prompt([

    //     {
    //         type: "list",
    //         name: "What do you want to do?",
    //         message: "Who you want to play with?",
    //         choices: ["dog", "cat"]
    //     }
    
  
});
