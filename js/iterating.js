 "use strict"
    // /**
    //  * TODO:
    //  * Create an array of 4 people's names and store it in a variable called
    //  * 'names'.
    //  */


 var names = ['john', 'nacho', 'anthony', 'gilbert'];

    // /**
    //  * TODO:
    //  * Create a log statement that will log the number of elements in the names
    //  * array.
    //  */
    //                 console.log(names.length)
    // /**
    //  * TODO:
    //  * Create log statements that will print each of the names individually by
    //  * accessing each element's index.
    //  */
    //             console.log(names[0]);
    //             console.log(names[1]);
    //             console.log(names[2]);
    //             console.log(names[3]);
    // /**
    //  * TODO:
    //  * Write some code that uses a for loop to log every item in the names
    //  * array.
    //  */
    //             for(var i = 0; i < names.length; i += 1){
    //                 console.log(names[i]);
    //                  }
    // /**
    //  * TODO:
    //  * Refactor your above code to use a `forEach` loop
    //  */
    //             names.forEach(function (element, index, array){
    //                 console.log(element);
    //                 console.log(index);
    //                 console.log(array);
    //                  })
    // /**
    //  * TODO:
    //  * Create the following three functions, each will accept an array and
    //  * return an an element from it
    //  * - first: returns the first item in the array

        function firstItem(names){
            return names[0];
        }
 console.log(firstItem(names))
    //  * - second: returns the second item in the array
        function secondItem(names){
            return names[1];
        }
 console.log(secondItem(names))
    //  * - last: returns the last item in the array
        function lastItem(names){
            return names[names.length - 1] ;

                // [3];   <--- commented out to see if the .length - 1 works
        }
 console.log(lastItem(names))
    //  *
    //  * Example:
    //  *  > first([1, 2, 3, 4, 5]) // returns 1
    //  *  > second([1, 2, 3, 4, 5]) // returns 2
    //  *  > last([1, 2, 3, 4, 5]) // return 5
    //  */

