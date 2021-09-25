// let name = "Nuraida";
// name.slice(0, 1);


// alert(prompt("Compose your tweet:").slice(0, 140));


// alert("You have written" + tweet.length + "characters,you have" + (140 - tweet.length) + "characters remaining.");

// let name = "Nuraida";
// name = name.toUpperCase();
// name = name.toLowerCase();

// let userName = prompt("Hello, what is your name?");
// let firstChar = name.slice(0, name.length);

// let capitalizedName = upperCaseFirstChar + restofName;

// let dogAge = prompt("How old is your Dog?");
// let humanAge = ((dogAge - 2) * 4 + 21);
// alert("Your dog is " + humanAge + " years old in humans years.");

// function getMilk(money, costPerBottle) {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");

//     // let numberOfBottles = Math.floor(money / 1.5);

//     // console.log("buy" + numberOfBottles + "bottles of Milk");

//     console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");

//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");

//     return calcChange(money, costPerBottle);

// }

// function calcBottles(startingMoney, costPerBottle) {
//     let numberOfBottles = Math.floor(startingMoney / costPerBottle);

//     return numberOfBottles;
// }

// function calcChange(startingAmount, costPerBottle) {
//     let change = startingAmount % costPerBottle;
//     return change;

// }

// console.log("Hello master, here is your " + getMilk(10, 3) + " change.");



// function lifeInWeeks(age) {

//     let yearsRemaining = 90 - age;
//     let days = yearsRemaining * 365;
//     let weeks = yearsRemaining * 52;
//     let months = yearsRemaining * 12;


//     console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " montns left.");

// }

// lifeInWeeks(31);




//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/