// fetch('https://api.github.com/users', {headers: {'Authorization': GIT_HUB_TOKEN}})

// `https://api.github.com/users/${username}/events`

function lastPush(username) {
    return fetch(`https://api.github.com/users/${username}/events`,
    {headers: {'Authorization': 'token' + GIT_HUB_TOKEN}})
        .then(response => response.json())
        .then(response => response[0].created_at)
        .catch(console.error)
}

console.log(lastPush('I-MNacho'))