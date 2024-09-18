// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
// Write your code here
console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");


currencies = {'JPY' : 113.5 ,
    'EUR' : 0.89,
    'RUB' : 74.36,
    'USD' : 1,
    'GBP' : 0.75};
function menu(){
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program\n");
    let action = Number(input());
    switch (action) {
        case 1:
            convertMoney();
            break;
        case 2:
            console.log("Have a nice day!");
            return false;
        default:
            console.log("Unknown input");
            menu();
    }
}
function convertMoney(){
    console.log('What do you want to convert?');
    let convert =  input("From: ");
    convert = convert.toUpperCase();
    if (!(convert in currencies)){
        console.log("Unknown currency");
        convertMoney();
    }
    else {
        let toConvert = input("To: ").toUpperCase();

        if (!(toConvert in currencies)){
            console.log("Unknown currency");
            convertMoney();
        }
        else{
            let amount = Number(input("Amount: "));
            if (isNaN(amount)) {
                console.log("The amount has to be a number");
            }
            else if (amount > 0){

                let newAmount = (amount / currencies[convert]) * currencies[toConvert];
                console.log("Result: "+amount+" "+ convert+ " equals "+newAmount.toFixed(4)+" "+toConvert);
                menu();
            }
            else {
                console.log("The amount cannot be less than 1");
                menu();
            }
        }
    }
}

while (menu() !== false){

}


