/* let js = 'amazing';
if (js === 'amazing') alert('Javascript is fun');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Jonas")
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM"
let $function = 27;

let person = "jonas";

let PI = 301415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';
*/

/* let javascript = true;
console.log(javascript);

console.log(typeof true);
console.log(typeof javascript);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascript = 'YES!'; */
/*
let age = 30;
age = 31;

const birthyear = 1991;

var job = 'programmer'
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName); */
/*const now = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas = 2, ageJonas / 10, 2 == 3);

const firstName = 'Jonas';
const lastName = 'Schmedit';
console.log(firstName + ' ' + lastName);*/
/*let x = 10 + 5;
x += 10;
x *= 4;
x ++;
x --;
x --;
console.log(x);*/
/*const firstName = 'Jonas';
const job = 'teacher';
const birthyear = 1991;
const year = 2037;
const jonas = "I'm" + firstname +',a'+ (year - birthyear) + 'year old' + job + '!';
console.log(jonas);
const jonasNew = 'I'm ${firstName},a ${year-birthyear}*/
/*const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
}
else {
    const yearsLeft = 18 - age;
    console.log('Sarah is too young. Wait another $ {yearsLeft} years :)');
}  */

/*const drink  =  age >= 18 ? 'wine' : 'water' ;
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else{
    drink2 = 'water';
}
*/
/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

/* function logger() {
    console.log('My name is Jonas');

}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = 'Juice with ${apples} apples and $ {oranges} oranges.';
    return juice;    
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
function cutFruitPieces(fruit){
    return fruit=4;
}
function fruitProcessor(apples, oranges){
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice = 'Juice with ${apples} apples and ${oranges} oranges';
    return juice;
}
console.log(fruitProcessor(2,3));
*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthyYear, firstName) {
    const age = calcAge(birthyYear);
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/
/*
const friend1 = 'Prateek'
const friend2 = 'Harshith'
const friend3 = 'Sukeerth'

const friends = ['Prateek','Harshith','Sukeerth'];
console.log(friends);

const years = new Array(2001,2000,1999,2001);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]= 'Pavan';
console.log(friends);

*/
/*
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);  */
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age:2037-99,
    job:'teacher',
    friends:['Michael','Peter','Steven']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
const interestedIn = prompt('What do you want to know about jonas? Choose between firstName,lastName,age,job, and friends');
console.log(jonas[interestedIn]);
*/
/*
const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear:1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    }
};

console.log(jonas2.calcAge());
console.log(jonas2.calcAge());
console.log(jonas2.calcAge());
console.log(jonas2.calcAge());
*/
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log('Lifting weights repetition ${rep}');
}
*/
/*
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages); */

/*const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
     ['Michael', 'Peter', 'Steven'],
     true
];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
*/
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}
*/
/*
'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();
*/
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {};
*/
/*
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;

    }
    console.log(max, min);
    return max - min;
};
const amplitudeNew = calc
*/
/*

'use strict';

console.log(document.querySelector('.message'),
textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

/*
const number = Math.random();

document.querySelector('.check').addEventListener ('click', function() {
    const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

if (!guess) {
    document.querySelector('.message').textcontent = 'No number!';
}
});
*/
/*
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';

} else if (guess === secretNumber) {

}

});  */
/*
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

*/

/*
Array.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
*/

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));