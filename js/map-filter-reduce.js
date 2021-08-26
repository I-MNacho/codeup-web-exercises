//1.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//2.Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threeLanguages = users.filter(user => user.languages.length  >= 3 );
// console.log(threeLanguages)


//3.Use .map to create an array of strings where each element is a user's email address

let emailAddresses = users.map(user => user.email)
console.log(emailAddresses)

//4.Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let yearsOfExperience = users.reduce((totalYears, users, index, array) =>
    totalYears + users.yearsOfExperience / array.length, 0);
console.log(yearsOfExperience)

//5.Use .reduce to get the longest email from the list of users.
//my solution
// let longestEmail = users.reduce((total, users, index, array) =>{
// if (index === array.length -1){
//     total.push(users.email)
//     total.sort((a,b) => b.length - a.length)
//     return total[0]
// }else{
//     total.push(users.email)
//     return total
// }
// }, []);
// console.log(longestEmail)


//Paris Shirley's solution:
let longestEmail = users.reduce((a,b) =>{
    if (a.length < b.email.length){
        a = b.email
    }
    return a;
}, '')
console.log(longestEmail);

//trying to one line Paris's solution
// let longestEmail = users.reduce(((a, b) => a.length < b.email.length ? a = b.email : a), '')




//6.Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let everyonesName = users.reduce((accumulator, users, index, array) =>{
    if (index === array.length -1){
        accumulator.push(users.name)
        return `Your instructors are: ${accumulator.join(', ')}`
    }else{
        accumulator.push(users.name)
        return accumulator
    }
}, []);

console.log(everyonesName)

//BONUS:
//1.Use .reduce to get the unique list of languages from the list of users.

let uniqueUserLanguages = users.reduce((accumulator, user) => {
let languages = user.languages;
for (let i =0; i < languages.length; i++){
    if (!accumulator.includes(languages[i])){
        accumulator.push(languages[i]);
    }
}
return accumulator.sort();
}, []);
console.log(uniqueUserLanguages);




















