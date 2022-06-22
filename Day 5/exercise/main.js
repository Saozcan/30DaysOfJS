import {webTechs} from "./web_techs.js";

import {countries, ahmet_numbers} from "./countries.js"

console.log("Hello Mars")

console.log(countries)
console.log(webTechs)

let words = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
console.log(words)
let newWords = words.replace(/[,.]/g,"") // remove these characters from the strings
console.log(newWords)
console.log(newWords.split(" "))
console.log(newWords.split(" ").length)

console.log(ahmet_numbers)

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"]
shoppingCart.includes("Meat") ?
    console.log("There is already") :
    shoppingCart.unshift("Meat")
console.log(shoppingCart)

shoppingCart.includes("Sugar") ?
    console.log("There is already") :
    shoppingCart.push("Sugar")
console.log(shoppingCart)

shoppingCart.includes("Sugar") ?
    console.log("There is already"):
    shoppingCart.push("Sugar")

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart)

countries.includes("Ethiopia") ?
    console.log("ETHIOPIA") :
    countries.push("Ethiopia")
console.log(countries)

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]
const backEnd = ["Node", "Express", "MongoDB"]
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
ages.length % 2 == 1 ?
    console.log(ages[ages.length / 2 | 0]) :
    console.log((ages[ages.length/2 | 0] + ages[ages.length / 2 | 1]) / 2)
let sum = 0;
for (let i = 0; i < ages.length; i++)
    sum += ages[i]
console.log(sum/ages.length)
console.log(ages[ages.length - 1] - ages[0])


console.log(countries.slice(0,10))
countries.length % 2 == 1 ?
    console.log(countries[countries.length/2 | 0]):
    console.log(`${countries[(countries.length / 2) - 1]} ${countries[countries.length / 2]}`)
if (countries.length % 2 == 1)
    countries.unshift("Hungarian")
console.log(countries.slice(0,countries.length / 2))
console.log(countries.slice(countries.length / 2,countries.length))






