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