console.log("Hello Go")

// Destructuring and Spread
//Destructing Arrays
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers // let !!!
console.log(numOne, numTwo, numThree) // 1 2 3

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTempp] = scientificConstants
console.log(boilingTempp)

const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"]
]
let [frontEnd, backEnd] =fullStack
console.log(backEnd)

//if we like to skip on of the values in the array we use additional comma.
//The comma helps to omit the value at that specific index
const numbers2 = [1, 2, 3]
let [numOne2, , numThree2] = numbers2
console.log(numOne, numThree)

const names = ["Ahmet", "Ali", "Samim", "Mehmet"]
let [, secondPerson, , fourthPerson] = names
console.log(secondPerson, fourthPerson) // first and third person is omitted

//We can use qdefault value in case the value of array for that index is undefined
const names2 = [undefined, "Salih", "Fatih"]
let [
    firstPerson2 = "Maho",
    secondPerson2,
    thirdPerson2,
    fourthPerson2 = "Ayse"
] = names2
console.log(firstPerson2, fourthPerson2)

//We can not assign variable to all the elements in the array. We can destructure few of the first
// and we can get the remaining as array using spread operator(...)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(rest)

const countries = [["Finland", "Helsinki"], ["Sweden", "Stockholm"], ["Norway", "Oslo"]]
for (const [country, city] of countries) {
    console.log(country)
}




//Destructuring object
//When we destructure the name of the variable we use to destructure should be exactly
//the same as the key or property of the object. See the example below.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
}
//let {width, height, area, perimeter} = rectangle
//console.log(width, height, area, perimeter)


//Renaming during structuring
let {width: w, height: h, area: a, perimeter} = rectangle
console.log(w, h, a, perimeter) // === consolo.log(width, height, area, perimeter)

//If the key is not found in the object the variable will be assigned to undefined. Sometimes the
//might not be in the object, in that case we can give a default value during declaration. See the exam.
console.log(perimeter)
let {width, height, area, perimeter2 = 60} = rectangle
console.log(perimeter2) // default 60
const rectangle2 = {
    width: 20,
    height: 10,
    area: 100,
    perimeter: 100
}
let {width2, height2, area2, perimeter3 = 60} = rectangle2
console.log(width2, height2, area2, perimeter3)

//Destructuring keys as a function parameters. Let us create a function which takes a rectangle object
//and it returns a perimeter of a rectangle.
const rect = {
    width: 20,
    height: 10
}
const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}
console.log(calculatePerimeter(rect)) // 60

//take piece by piece
const todoList = [
    {
        task:'Prepare JS Test',
        time:'4/1/2020 8:30',
        completed:true
    },
    {
        task:'Give JS Test',
        time:'4/1/2020 10:00',
        completed:false
    },
    {
        task:'Assess Test Result',
        time:'4/1/2020 1:00',
        completed:false
    }
]

for (const {task, time, completed} of todoList){
    //console.log(task, time, completed)
    console.log(task) //only gives task "values"!!!
}
//or
for (const task of todoList) {
   // console.log(task) // it gives all of them at the same array
}



// Spread or Rest operator
//When we destructure an array we use the spread operator(...) to get the rest elements as array.
//In addition to that we use spread operator to spread array elements to another array.
//const nums = [1,...,10]
//let [num1, ...rest]
//console.log(rest)

const countries2 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]
let [gem, fra, , ...nordicCountries] = countries2
console.log(gem)
console.log(fra)
console.log(nordicCountries) //it gives as a array

//Spread operator to coppy array
const evens = [0, 2, 4, 6, 8]
const odds = [1, 3, 5, 7, 9]
const evenNumbers = [...evens]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]
console.log(wholeNumbers)




















































