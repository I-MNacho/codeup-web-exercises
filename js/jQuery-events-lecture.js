'use strict';



$(document).ready(function (){
    //call the jQuery funciton with '$'.. pass it a selector , this returns a jQuery object,  then add your event listerner or other method, in this case its the 'click', pass the jQuery method as anonymous function, the function contains in its code
    $('#clickMe').click(function (){
        alert("you clicked me!")
    });
    //an element gets clicked
    //the event listener attached to that element "hears" the click event and passes on to the javascript inpterpreter the code that is attached to it
    //the interpreter runs the function specified the listener

    //the .on method
    $('#clickMeToo').on('click', function (){
        alert("yay, i got clicked too!")
    });

    $('.simple-box').hover(
        function (){
            $(this).css('outline', '8px ridge rebeccapurple');
        },
        function (){
            $(this).css('outline', 'none');
        }
    );

        $('.simple-box').mouseenter(function (){
            $(this).css('background-color', 'hotpink');
    });

    $('.simple-box').mouseleave(function (){
        $(this).css('background-color', 'white');
        });



    $(document).keyup(function (event){
        console.log(event.keyCode);
    });

    // this creates buttons
        $('#create-an-element').click(function (){
            $(this).after('<button class = "does-it-work"> Try Clicking me</button>')
        })




    // event listener doesnt work for this class because the element gets added after the       code has been read by browser
        $('.does-it-work').click(function (){
            alert('You wis this would work, but it doesnt');
        })

        // this allows the document to add that element to the does it work class
        $(document).on('click', '.does-it-work', function (){
            alert('now i can add an event listener to a dynamically create element.')
        })
});



//types of Events
// load events (load, ready, unload)
// browser events (resize, scroll, error)
// form events (focus, blur, select, submit, change)
// keyboard
// mouse events (click, doubleclick, mousedown, mouseup, mouseenter, mouseleave)