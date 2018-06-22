
// Javascript External File

/* 
JavaScript program which JavaScript function printTimesTable
which prints times (till 10) table for given number as input.. 
*/

var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];
// Combine three arrays into single array in order as primes, evens and odds
var allArrays = [...primes, ...evens, ...odds];
console.log('Combine three arrays into single array (in order: primes, evens and odds)\n' + allArrays +'\n---------------------');

// Copy primes[] array into another array
var primeCopy = [...primes];
console.log('Copy of primes[] array in to a new array: ' + primeCopy);

// Destructuring an object into variables names same the property names
var jamesBond = {
    first: 'James',
    last: 'Bond',
    country: 'United States',
    city: 'New york',
    twitter: '@jamesbond'
};

var { first,
    last,
    country,
    city,
    twitter } = jamesBond;

// Destructure below array into variables player1,player2,player3 and player4 respectively
var players = ['Sudip', 'Sharath', 'Asshina', 'Karthikeyan', 'Kyle'];
var [player1, player2, player3, player4, players5] = players;
console.log('Print the valu of players[player3] is ' + player3);


