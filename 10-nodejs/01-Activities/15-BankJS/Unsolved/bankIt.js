var fs = require('fs');
var bankComand = process.argv[2];
var amount = process.argv[3];
var bankData;


fs.readFile("bank.txt", "utf8", function (error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }
    bankData = data.split(",");
    switch (bankComand) {
        case 'total':
            //sends total
            console.log('Balance: ' + getTotal(convertArr(bankData)));
            break;
        case 'deposit':
            //deposits money
            depositWithdraw(amount, 'deposit');
            break;
        case 'withdraw':
            //withdraws money
            depositWithdraw(amount, 'withdraw');
            break;
        case 'lotto':
            // Lotto
            lottoThis(amount);
            break;
    }
});

function convertArr(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = (parseFloat(arr[i]))
    }
    return arr;
}

function getTotal(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    return sum;
}

function depositWithdraw(amount, action) {
    if (amount != undefined) {
        if (action === 'withdraw') {
            amount = '-' + amount;
        }
        else {
        }
        var text = ", " + amount;
        if (typeof parseFloat(amount) === 'number') {
            fs.appendFile("bank.txt", text, function (err) {

                if (err) {
                    console.log(err);
                }

                if (action === 'deposit') {
                    console.log("Money added to account!");
                    console.log('New balance: ' + getTotal(convertArr(bankData)));
                }
                else {
                    console.log("Money taken from account!");
                    console.log('New balance: ' + getTotal(convertArr(bankData)));
                }
            });
        }
    }
    else {
        return "No amount given"
    }
}

function lottoThis(amount) {
    if (amount != undefined && typeof parseFloat(amount) === 'number') {
        randomNumber1 = Math.floor(Math.random() * (3));
        randomNumber2 = Math.floor(Math.random() * (3));
        console.log("Random number 1: " + randomNumber1);
        console.log("Random number 2: " + randomNumber2);

        if (randomNumber1 === randomNumber2) {
            console.log('Won!')
            depositWithdraw(amount * 2, 'deposit');
        }
        else {
            console.log('Lost!');
            depositWithdraw(amount, 'withdraw');;
        }
    }
    else {
        return "No amount given"
    }
}



