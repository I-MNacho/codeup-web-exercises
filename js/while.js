// var number = 2
// while(number <= 65536){
//     console.log(number);
//     number = number * 2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
// alert('You have ' + allCones + ' cones to start with.')
do {
    var howManyCones = Math.floor(Math.random() * 5) + 1;
    if (howManyCones > allCones){
        console.log("Cannot sell you" + howManyCones + " I only have " + allCones);
    } else {
        allCones = allCones - howManyCones;
        console.log(howManyCones + "cones sold..." + allCones + "cones left");
    }
    // console.log(howManyCones + 'cones sold...')
    // var totalConesLeft = allCones - howManyCones;

    // alert('You would like to buy ' + howManyCones);
    // alert('We have ' + totalConesLeft + ' cones left to sell.');

}
while (allCones > 0){
    console.log('Yay! I sold them all!');

};
