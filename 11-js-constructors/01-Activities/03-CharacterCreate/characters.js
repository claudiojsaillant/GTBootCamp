function newCharacter(name, profession, gender, age, strenght, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strenght = strenght
    this.hp = hp
    this.printStats = function () {
        var arrayOfKeys = Object.keys(this);
        for (i = 0; i < arrayOfKeys.length-4; i++) {
            console.log(arrayOfKeys[i] + ": " + this[arrayOfKeys[i]]);
        }
    }
    this.isAlive = function () {
        if(this.hp <= 0){
            return false;
        }
        else {
            return true;
        }
    }
    this.attack = function (char){
        char.hp = char.hp - this.strenght;
    }
    this.levelUp = function (){
        this.age = this.age + 1;
    }
}
var charOne = new newCharacter('Claudio', 'Student', 'Male', 20, 50, 200);

var charTwo = new newCharacter('Alta', 'Student', 'Female', 21,  8, 170);

// console.log(charOne.isAlive())

// charOne.attack(charTwo);
// charOne.attack(charTwo);
// charOne.attack(charTwo);
// charOne.attack(charTwo);

// console.log(charTwo.isAlive())

charOne.printStats();
charOne.levelUp()
console.log('+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+')
charOne.printStats();



