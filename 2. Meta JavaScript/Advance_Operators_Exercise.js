//Determining skill of player in the game
var score = 8;
console.log("Mid-level skills:",score>0 && score<10);

//Determining if game is over or not according to energy level and time remaining
var timeRemaining=1;
var energy=10;
console.log("Game over: ", timeRemaining==0 || energy==0);

//Checking if two pre-declared numbers are even or not
var num1 = 2;
var num2 = 5;
var test1 = 2 % 2;
var test2 = 5 % 2;
var result1 = (test1 == 0);
var result2 = (test2 == 0);
console.log("Is ", num1, " an even number?", result1);
console.log("Is ", num2, " an even number?", result2);

//concatening 
var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d);

//addition assignment
var counter = 0;
counter += 5;
counter += 3;
console.log(counter);