// fetch('https://api.github.com/users', {headers: {'Authorization': GIT_HUB_TOKEN}})

// `https://api.github.com/users/${username}/events`


// function capturedEvent(events){
//     if(events.type == "PushEvent"){
//         console.log( events[0].created_at)
//
// }


function lastPush(username) {
    return fetch(`https://api.github.com/users/${username}/events`,
    {headers: {'Authorization': 'token' + GIT_HUB_TOKEN}})
        .then(response => response.json())
        .then(response => response[0].created_at)
        .then(console.log)
        // .then (alert)
        .catch(console.error)
}
console.log(lastPush('I-MNacho'));

// =================== BONUS exercise 1
// In your data directory, create a profiles.json file with the following...
// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }
// Add an input field and submit button (you will need to prevent the default behaviour) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.
// =================== BONUS exercise 2
// Using the Star Wars API, log the first film a Star Wars character's homeworld appeared in
// =================== BONUS exercise 3
// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.
// =================== BONUS exercise 4
// Create star-chars.json file in your data folder and paste in the following...
// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]
// Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...
// ['Jakku', 'Tatooine', 'Tatooine']