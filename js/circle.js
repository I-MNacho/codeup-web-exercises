// (function() {
    "use strict";

    function calculateArea(myRadius){
        var area = (myRadius * myRadius * Math.PI);
        return area;
    }

    function myArea () {
        calculateArea(myRadius);

        var circle = {
                radius: 3,
                getArea: function () {
                    return calculateArea(this.radius)
                }
            }

        //     logInfo:
        // function (doRounding) {
        //     // TODO: complete this method.
        //     // If doRounding is true, round the result to the nearest integer.
        //     // Otherwise, output the complete value
        //
        //     console.log("Area of a circle with radius: " + this.radius + ", is: ");
        // }
    };
    // };
console.log(myArea.getArea)
    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
    //
    // console.log("=======================================================");
    // // TODO: Change the radius of the circle to 5.
    //
    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
// })();