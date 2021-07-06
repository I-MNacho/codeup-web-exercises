"use strict";

// var userDecsion = confirm("are you sure you dont want more stuff to buy");
// console.log(userDecsion);
//
// if (userDecsion === true){
//     alert("wise choice!");
// }else{
//     alert("oh no, your loss!");
// }

//prompt

// var currentSpeedInMph = 65;
// var plannedSpeedInMph = prompt("how fast do you plan to go in mph");
// var distanceLeftInMiles = prompt(" how many miles away are you from your destination?");
// var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles/currentSpeedInMph) * 60;
// var timeToDestinationAtPlannedSpeed = (distanceLeftInMiles/plannedSpeedInMph) * 60;
// var timeGain = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeed;
// var minutesGained = Math.floor(timeGain);
// var seconds = Math.round((timeGain - minutesGained) * 60);
//
// console.log("If you drive at " + plannedSpeedInMph + " mph, you will arrive " + minutesGained + " minutes and " + seconds + " minuets earlier. Is it worth it?");

// console.log("Hello from external Javascript");
//
// alert("Welcome to my Website!");
//
// var colorAnswer = prompt("What is your favorite color?");
// alert(colorAnswer + " is my favorite color too!");

//
//     You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

// var rentalPerDayDollars = 3;
// var littleMermaidDays = prompt("How many days are you renting The Little Mermaid?");
// var brotherBearDays = prompt("How many days are you renting Brother Bear?");
// var herculesDays = prompt("How many days are you renting Hercules?");
// var totalRentalCost = (littleMermaidDays * 3) + (brotherBearDays * 3) + (herculesDays * 3);
// totalRentalCost = alert("Your total will be $" +
//     (parseInt(littleMermaidDays)
//         + parseInt(brotherBearDays)
//         + parseInt(herculesDays))
//     * parseInt(rentalPerDayDollars));


var googlePaysPerHour = parseFloat(prompt("What does Google pay per hr?"));
var amazonPayPerHour = parseFloat(prompt("What does Amazon pay per hr?"));
var facebookPayPerHour = parseFloat(prompt("What does Facebook pay per hr?"));
var googleHoursWorked = parseFloat(prompt("How many hours did you work for Google?"));
var amazonHoursWorked = parseFloat(prompt("How many hours did you work for Amazon?"));
var facebookHoursWorked = parseFloat(prompt("How many hours did you work for Facebook?"));

var totalGooglePay = (googlePaysPerHour * googleHoursWorked);
var totalAmazonPay = (amazonPayPerHour * amazonHoursWorked);
var totalFaceBookPay = (facebookPayPerHour * facebookHoursWorked);

var totalPayForWeek = alert ("Your total pay this week is $" + (totalGooglePay + totalAmazonPay + totalFaceBookPay));