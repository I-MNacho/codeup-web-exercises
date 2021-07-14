"use strict";


// * TODO:
// * Create a function called 'sayHello' that takes a parameter 'name'.
// * When called, the function should return a message that says hello to the passed in name.

// function sayHello(name){
//     return "hello " + name
// }
//
// console.log(sayHello('bob'));


// * Example
// * > sayHello("codeup") // returns "Hello, codeup!"



// * TODO:
// * Call the function 'sayHello' and pass your name as a string literal argument.
// * Store the result of the function call in a variable named 'helloMessage'.
//
// sayHello('Ignacio');
// var helloMessage = sayHello('Ignacio');
//
// console.log(helloMessage);
//
//
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
// var myName = 'Ignacio';
// console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);


  // TODO:
  // Create a function called 'isTwo' that takes a number as a parameter.
  // The function should return a boolean value based on whether or not the passed
  // number is the number 2.
// function isTwo(num){
//     return num === 2;
// }
// console.log(isTwo(1));
 //
 //  Example
 //  > isTwo(1) // returns false
 //  > isTwo(2) // returns true
 // > isTwo(3) // returns false
 //
 //  Call the function 'isTwo' passing the variable 'random' as a argument.
 // console.log(isTwo(random));
 //  console.log *outside of the function* to check your work (you should see a
 //  different result everytime you refresh the page if you are using the random
 //  number)



//   TODO:
//   Create a function named 'calculateTip' to calculate a tip on a bill at a
//   restaurant. The function should accept a tip percentage and the total of the
// bill, and return the amount to tip
//
//   Examples:
//      > calculateTip(0.20, 20) // returns 4
//     > calculateTip(0.25, 25.50) // returns 6.375
//     > calculateTip(0.15, 33.42) // returns 5.013
//
//
// function calculateTip(tip , bill){
//     return (parseFloat(tip) * parseFloat(bill));
// }


  //
  // TODO:
  // Use prompt and alert in combination with your calculateTip function to
  // prompt the user for the bill total and a percentage they would like to tip,
  // then display the dollar amount they should tip
  //
// var tipPercentage = prompt("How much do you want to tip?");
// var totalBill = prompt('What is the total bill?');
// function calTip(tipPercentage, totalBill){
//     alert ("today your tip will be $" + (parseFloat(tipPercentage)) * (parseFloat(totalBill)) + ' thank you for dinning with us');
// }
//
// calTip(tipPercentage, totalBill);

//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
// function applyDiscount(originalPrice, discountPercent){
//    return (parseFloat(originalPrice) - parseFloat(originalPrice) * parseFloat(discountPercent));
// }
// console.log(applyDiscount(45.99 , .12));


//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */




// Bonus 1
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case
// function favoriteDayOfTheWeek (){
//     var input = prompt('What is your favorite day of the week?').toLowerCase();
//     if (input === 'sunday'){
//         return alert('sunday is a day to rest!');
//     }else if (input === 'monday'){
//         return alert('Everyone hates Mondays!');
//     }else if (input === 'Tuesday'){
//         return alert('Taco Tuesdays!');
//     }else if (input === 'Wednesday'){
//         return alert('It is hump day!');
//     }else if (input === 'Thursday'){
//         return alert('Thirsty Thursdays!');
//     }else if (input === 'Friday'){
//         return alert('Its the start of the weekend!');
//     }else if (input === 'Saturday'){
//         return alert('Party time!');
//     }else{
//         return alert('That is not a weekday!');
//     }
// }

// function favDayOfWeekSwitch() {
//     var tellMeWhat = prompt('What is your favorite day of the week?')
//     switch (tellMeWhat) {
//         case('sunday').toLowerCase():
//             alert('sunday is a day to rest');
//             break;
//         case('monday').toLowerCase():
//             alert('Everyone hates Mondays!');
//             break;
//         case('tuesday').toLowerCase():
//             alert('Taco Tuesday');
//             break;
//         case('wednesday').toLowerCase():
//             alert('Taco Tuesday');
//             break;
//         case('thursday').toLowerCase():
//             alert('Thirsty Thursdays!');
//             break;
//         case('friday').toLowerCase():
//             alert('Its the start of the weekend!');
//             break;
//         case('saturday').toLowerCase():
//             alert('Party  time!');
//             break;
//         default:
//             alert('That/s not a weekday');
//     }
// }
// favDayOfWeekSwitch();


//     Bonus 2
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
// function isANumber (){
//    var userInput = parseFloat(prompt('Enter a number please.'));
//     if (userInput){
//         return alert('This is a number');
//     }
//     else{
//         return alert('Sorry this is not a number.')
//     }
// }
// isANumber();
// function isANumber (){
//     var userInput = parseFloat(prompt('Enter a number please.'));
//     return (userInput? alert('This is a number') : alert('This is not a number.'));
// }
//
// isANumber();

// Bonus 3
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// function isItSpring () {
//     var seasonSelect = prompt('Enter a Season');
//         if (seasonSelect === 'spring') {
//             alert('March, April and May are all in Spring!');
//         }
//         if (springMonthSelect === 'march') {
//             alert('Happy St. Pattys!');
//         }
//         if (springMonthSelect === 'april') {
//             alert('I love april showers');
//         }
//         if (springMonthSelect === 'may') {
//             alert('Happy Graduation time!');
//         }
// }
// isItSpring();
// function isItSummer (season) {
//     if (seasonSelect === 'summer') {
//         alert('June, July, and August are all in Summer!');
//     }
//     if (springMonthSelect === 'june') {
//         alert('it is summer vacation!');
//     }
//     if (springMonthSelect === 'july') {
//         alert('Happy fourth of July!');
//     }
//     if (springMonthSelect === 'august') {
//         alert('Back to School!');
//     }
// }
// function isItFall (season) {
//         if (seasonSelect === 'fall') {
//             alert('september, october and november are all in Fall!');
//         }
//         if (springMonthSelect === 'october') {
//             alert('Happy halloween');
//         }
//         if (springMonthSelect === 'november') {
//             alert('Happy Thanksgiving!');
//         }
//         if (springMonthSelect === 'september') {
//             alert('Burr its cold!');
//         }
// }
// function isItWinter(season) {
//         if (seasonSelect === 'fall') {
//             alert('september, october and november are all in Fall!');
//         }
//         if (springMonthSelect === 'december') {
//             alert('Merry Christmas!');
//         }
//         if (springMonthSelect === 'january') {
//             alert('Happy New Years!');
//         }
//         if (springMonthSelect === 'Febuary') {
//             alert('Happy valentines day!');
//         }
//     }

//
// function pickYourSeason(season){
//         var seasonChoice = prompt('Enter a season.').toLowerCase();
//         if seasonChoice ===
//
//
// }




// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
// GOLD STAR BONUS
// Create a distance unit conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units



function testFunction(input1, input2, input3){
    
}