console.log("Hello Mars")

//
//console.log("merhaba")
//Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods
//which can help us to solve complicated problems. All builtin methods take callback function. In this
//section, we will see forEach, map, filter, reduce, find, every, some, and sort.

//forEach forEach: Iterate an array elements. We use forEach only with arrays.
//It takes a callback function with elements, index parameter and array itself.
//The index and the array optional.

const arr = [1, 2, 3, 4, 5]
arr.forEach(function (element, index, arr) {
    //console.log(index, element, arr)
})
//The above code can be written using arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr) // index is index, a special name for js
})
//The above code can be written
arr.forEach((element, index, arr) => console.log(index, element, arr))

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

numbers.forEach(num => sum += num)
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

//map
//map Iterate an array elements and modify the array elements. It takes a callback function with elements,
//index, array parameter and return a new array
const modifiedArray = arr.map(function (element, index, arr) {
    return element
})
//Arrow function and explicit return const modifiedArray = arr.map((element, index) => element);
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

const numbersDivide = numbers.map((num) => num / 2) // take array and make a new array with change
console.log(numbersDivide)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const namesToLowerCase = names.map((name) => name.toUpperCase())

const countriesFirstThreeLetters = countries.map((country) =>
    country.toUpperCase().slice(0, 3)
)
console.log(countriesFirstThreeLetters)

//filter
//Filter out items which full fill filtering conditions and return a new array
const countriesContainingLand = countries.filter((country) =>
    country.includes('land') // takes only containing 'land'
)
console.log(countriesContainingLand)

countries.push('Albania', 'Bolivia', 'Ethiopia')
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

countries.push('Japan', 'Kenya')
const countriesHaveFiveLetters = countries.filter((country) => country.length === 5)
console.log(countriesHaveFiveLetters)

const scores = [
    {name: 'Asabeneh', score: 95},
    {name: 'Lidiya', score: 98},
    {name: 'Mathias', score: 80},
    {name: 'Elias', score: 50},
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

//reduce
//Reduce takes callback function. The call back function takes accumulator, current, and optional initial
//value as a parameter and returns a single value. It is a good practice to define an initial value for
//the accumulator value. If we do not specify this parameter, by default accumulator will get array
//first value. If our array is an empty array, then JavaScript will throw an error.
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum2)
//reducu() method in JavaScript is used to reducc the array to a single value and executes a
//provided function for each value of the array (from left to right) and the return value of the
//function is stored in an ACCUMULATOR!!!!!!!!!!!!


//every
//Check if all the elements are similar in one aspect. It returns boolean
const areAllStr = names.every((name) => typeof name === 'string') //Are all strings?
console.log(areAllStr)

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) //Are all true ?
console.log(areAllTrue)


//find
//return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age <= 20)
console.log(age)

const result = names.find((name) => name.length > 7)
console.log(result)

const score = scores.find((user) => user.score > 80)
console.log(score)


//findIndex
//

const salep = countries.reduce((acc, cur, index, array) => {
    if (index === array.length - 1)
        return `${acc} and ${cur} are north European countries`
    return `${acc}, ${cur}`
})

console.log(salep)

const countriesWithNumber = [123, "Türkiye", "German"]

const differentSome = countriesWithNumber.some((value) => typeof value === 'string')
console.log(differentSome) // true

const differentEvery = countriesWithNumber.every((value) => typeof value === 'string')
console.log(differentEvery)
// some method is using at least one condition
//every method wants all of them be same conditio*n...



















