//array iteration Methods = methods that operate on every item inside an array.


//map, filter, reduce do not alter the original array (does not mutate array)
//either create a new array from the old one, OR generate a value based on the old array
//
// var output = "";
// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

//for each loop , looping through an array
// prices.forEach(function (){});

//Arrow function // item is a local variable, or item in array// will loop and log ea item
// prices.forEach((item)=>{
//     // console.log(item);
//     output += `<p>${item}</p>`; // could also write old way = "<p>" + item + "</p>"
// });
// $('#output').html(output);

//can do it all in one line without "{}" if single line but not multi-line
// prices.forEach((item) => output += `<p>${item}</p>`);
// $('#output').html(output);


//Add operations such as Index
// prices.forEach((item, index) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total: $${total}.</p>`
// })
// $('#output').html(output);



//==============================================================================
//.map()  <-- takes in 3 elements ,element, index, and array but one parameter a function
//==============================================================================


// let pricesAfterTax = [];
//
// pricesAfterTax = prices.map((item) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// })
//the total gets pushed into the pricesAfterTax array
// let output = "";
// pricesAfterTax.forEach((item) => output += `<p>${item}</p>`)
// $('#output').html(output);
//==============================================================================

// let things = ["book", "pencil", "marker", "eraser"];
//old way of doing the map function
// var pluralThings = things.map(function(item){
//     item = item + 's';
//     return item;
// });
//==============================================================================
//new way
//==============================================================================
//another way to do above in one line
//let pluralThings = things.map((item) => `${item}s`);
// let output = "";
// pluralThings.forEach((item, index)=> index === 0 ? output += `<p>You must bring the following items:</p><p>${item}</p>` : output += `<p>${item}</p>`);
// $("#output").html(output);
//==============================================================================
const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

//es6 arrow notation
// const mileages = car.map(car=>car.mileage)


//OR vanilla js
// const mileages = cars.map(function (car){       //<--car is an object reference
//     return car.mileage
// })

//
// let output = "";
// mileages.forEach(item => output += `<p>${item}</p>`);
// $('#output').html(output);

//==============================================================================
//.filter()     <-- does create new array, function is the only parameter
//==============================================================================
//                      "car" is item in array
//                              es6 way:
const under10K = cars.filter(car => car.mileage < 10000 );

//                          long hand, old way
// const under10K = cars.filter(function (car){
//     if (car.mileage < 10000){
//         return true         //<-- if true will go into destination array
//     }else {
//         return false        //<-- if false will not go into destination array
//     }
// })

// var output = "";
// under10K.forEach(function (car){
//     output = output + "<p>"
// })




// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let affordablesWithTax = prices.filter(price => price < 10).map(price => {
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// })
// //out putting to html
// let output = "";
// affordablesWithTax.forEach(function (item){
//     output = output + "<p>" + item + "</p>"
//     $("#output").html(output);
// });


//==============================================================================
//.reduce()  <-- takes four parameters: total(accumalator) ,
//==============================================================================
//es6 way:
// let totalCost = affordablesWithTax.reduce((total, individualItemCost) => total + individualItemCost);


//vanilla js way:
// var totalCost = affordablesWithTax.reduce(function (total, itemPrice){
//     return total + itemPrice;
// })
//The reduce method automatically assigns the element at index 0 to the total
// let totalCost = affordablesWithTax.reduce((total, indivItemCost, index) =>{
//
//     console.log(`The index is ${index}, the total is ${total}, the itemCost is ${indivItemCost}`)
//     return total + indivItemCost;
// });

// let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) => {
//     total = total + indivItemCost;
//     if (index === array.length -1){   //<--- can tell when on last iteration of array
//         return total/array.length;
//     }else{
//         return total;
//     }
// })

//shorter way of doing above ^
// let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) =>
//     (index === array.length -1 ? (total + indivItemCost)/array.length : total + indivItemCost)
// );

//below, is taking every item in array and adding it to the 158.76, so initial total has been altered to be 158.76 + every item in array to give sum
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
var total = prices.reduce(function (total, price, index){
    console.log(`The index is ${index}, the total is ${total}, the itemCost is ${price}`)
    return total + price;
}, 158.76)

//==============================================================================
//==============================================================================
const aesopAnimals = ["Ant", "Grasshopper", "Ape", "Fox", "Donkey", "Donkey", "Donkey", "Lion", "Fly", "Bear", "Beaver", "Blackbird", "Wolf", "Bull", "Lion", "Cat", "Mouse", "Crab", "Fox", "Rooster", "Rooster", "Dog", "Fox", "Crow", "Crow", "Sheep", "Crow", "Snake", "Deer", "Dog", "Dog", "Sheep", "Dog", "Wolf", "Dog", "Lion", "Dove", "Ant", "Eagle", "Fox", "Eagle", "Stork", "Viper", "Fish", "Fly", "Ant", "Fly", "Snake", "Fox", "Crow", "Fox", "Fox", "Lion", "Fox", "Fox", "Lion", "Fox", "Stork", "Fox", "Weasel", "Fox", "Fly", "Hedgehog", "Hare", "Frog", "Fox", "Frog", "Mouse", "Frog", "Ox", "Frog", "Frog", "Goat", "Goose", "Hare", "Horse", "Donkey", "Horse", "Kite", "Dove", "Lion", "Lion", "Lion", "Lion", "Bear", "Fox", "Lion", "Boar", "Vulture", "Dog", "Mouse", "Oyster", "Donkey", "Ox", "Kite", "Snake", "Crab", "Snake", "Snake", "Tortoise", "Tortoise", "Hare", "Cat", "Wolf", "Wolf", "Lamb", "Swallow", "Tortoise"];

//counting through array and putting it into an object at end
//when total[animal]=1, it prints out every animal in array with a value of 1 ex: ant: 1
//when i do total[animal] = 1; I create a key-value pair ant: 1
let aesopAnimalsCounted = aesopAnimals.reduce((total, animal) => {
    // total[animal] = 1;      //<-- total is an empty object
    if (!total[animal]){
        total[animal] = 1;
    }else{
        total[animal] += 1;
    }
    return total
},{})

const aesopsAnimalCountedAndSorted = Object.entries
(aesopAnimalsCounted).sort(function (a, b){return b[1]-a[1]});

for (let i =0; i < aesopsAnimalCountedAndSorted.length; i++){
    $("#output").append(aesopsAnimalCountedAndSorted[i][0] + ": " +aesopsAnimalCountedAndSorted[i][1] + "<br>" );}
}


















//==============================================================================
//two decimal places method code
// (Math.round(num * 100) / 100).toFixed(2);
//
// Number(Math.round(parseFloat(value + 'e' + decimalPlaces)) + 'e-' + decimalPlaces)
