console.log("Write Clean Code")

//Airbnb JavaScript Style Guide
//Airbnb has one of the most popular JavaScript style guides on the internet.
//https://github.com/airbnb/javascript#types


//References
//Use const! for all of your references; avoid using var.!!!

//If you must reassign references, use let! instead of var.
//bad
var count = 1;
if (true) {
    count += 1;
}
//good
let count2 = 1;
if (true) {
    count += 1; // !!!! this is better than above
}


//Objects
//Use the literal syntax for object creation.
//bad
const item = new Object();

//good
const item2 = {}; // this is awesome, be careful

const showDateTime = () => {
    const now = new Date()
    const month = now.getMonth() + 1; //as a zero based (where zero indicates the first month of the year).
    console.log(month);
}
showDateTime();

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JavaScript', '...'],
    isMarried: true
};
for (const key in person) {
    console.log(key, person[key]); //iterating through object keys
}

//Declare object literal with const.!!! you know bro!!!

//Conditional
//We say if, if else, switch and ternary operators in previous challenges.
// syntax
let condition = 0
if (condition) {

} else {
    console.log("Hello...<3");
}

//Switch
let dayUserInput = prompt('What day is today');
let day = dayUserInput.toLowerCase();

switch (day) {
    case 'monday':
        console.log('Today is Monday');
        break
    case 'tuesday':
        console.log('Today is Tuesday');
        break
    case 'wednesday':
        console.log('Today is Wednesday');
        break
    case 'thursday':
        console.log('Today is Thursday');
        break
    case 'friday':
        console.log('Today is Friday');
        break
    default:
        console.log('Today is not a day');
}

//ternary
let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

//Classes
class ClassName {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}









































