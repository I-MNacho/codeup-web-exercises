//this is the solution

// var number = 176248;
// var numbersArray = number.toString().split('');
// console.log(numbersArray)
//
// var total = 0;
// numbersArray.forEach(function (number, index){
//   if (index % 2 !== 0){
//     if ((parseFloat(number) * 2) < 10){
//         total += parseFloat(number) * 2;
//   }else {
//       var numberArray = (number*2).toString().split('');
//       console.log(numberArray)
//       var numberToAddToToal = parseFloat(numberArray[0]) + parseFloat(numberArray[1]);
//       total += numberToAddToToal
//     }
//   } else{
//     total += parseFloat(number);
//   }
// })
// console.log(total);

function processNumber(number){
    var numbersArray = number.toString().split('');
    // console.log(numbersArray)
    var total = 0;
    numbersArray.forEach(function (number, index){
        if (index % 2 !== 0){
            if ((parseFloat(number) * 2) < 10){
                total += parseFloat(number) * 2;
            }else {
                var numberArray = (number*2).toString().split('');
                // console.log(numberArray)
                var numberToAddToToal = parseFloat(numberArray[0]) + parseFloat(numberArray[1]);
                total += numberToAddToToal
            }
        } else{
            total += parseFloat(number);
        }
    })
    return total;
}