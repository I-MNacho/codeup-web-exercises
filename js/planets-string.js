(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // /**
    //  * TODO:
    //  * Convert planetsString to an array, and save it in a variable named
    //  * planetsArray.
    //  * console.log planetsArray to check your work
    //  */
    var planetsArray = planetsString.split("|");


    // console.log(planetsArray);
    //
    // /**
    //  * TODO:
    //  * Create a string with <br> tags between each planet. console.log() your
    //  * results. Why might this be useful?
    //  *

    var planetsBreak = planetsArray.join('<br>');
    // console.log(planetsBreak);



    //  * BONUS:
    //  * Create another string that would display your planets in an undordered
    //  * list. You will need an opening AND closing <ul> tags around the entire
    //  * string, and <li> tags around each planet.
    //  */

    // var ulBeginTag = planetsArray.unshift('<ul>');
    // var ulEndTag = ulBeginTag.push('<ul>');
    // var liTags =
    //  console.log(ulBeginTag)

    var planetsToString;
    planetsToString = planetsArray.join('<br>');
    console.log(planetsToString);
    var planetList = ' ';
    planetsArray.forEach(function(planet){
        planetList += '<li>' + planet + '</li>';
    })
    planetList += '<ul>' + planetList + '</ul>';
    console.log(planetList)
})();