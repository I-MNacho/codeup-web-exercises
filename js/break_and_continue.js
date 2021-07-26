'use strict'


var numberToStopAt = prompt("Enter an odd number between 1 and 50");

for (var i = 1; i < 50; i + 3 ) {

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}