import {countries2} from "./countries/countries_data.js";

console.log("Hello Mars")

const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

//      set
// Set is a collection of elements. Set can only contain unique elements. !!!

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
for (const element of setOfLanguages) {
    console.log(element)
}

setOfLanguages.add("Turkish")

setOfLanguages.delete("English")

setOfLanguages.has("Turkish") // true

//setOfLanguages.clear()
//console.log(setOfLanguages)

const langSet = new Set(languages);
console.log(langSet) //
console.log(langSet.size)

const counts = []

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang)
    counts.push({lang: l, count: filteredLang.length})
}
console.log("Hello go")
console.log(counts)

//lets find the union of set A and set B (A U B)
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b] // A U B

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(c)

//Lets find the intersection of set A and set B (A U B)
let d = a.filter((num) => B.has(num))
let D = new Set(d)
console.log(D)

const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

const countriesMap = new Map()
countriesMap.set("Finland", "Helsinki")
countriesMap.set("Sweden", "Stockholm")
console.log(countriesMap)
console.log(countriesMap.size)

//getting a value from Map
console.log(countriesMap.get("Finland"))

//Checking key in Map
console.log(countriesMap.has("Finland")) //true


//Exercises                         /////////////

const howManyLanguagesUse = []
const onlyLanguages = new Set()
countries2.forEach((element) => {
    element.languages.forEach((lang) => {
        onlyLanguages.add(lang)
        howManyLanguagesUse.push(lang)
    })
})

//console.log(onlyLanguages)
const howManyLanguagesUsing = []

function howMany(x) {
    let count = 0;
    for (const l of howManyLanguagesUse) {
        if (x === l) {
            count++;
        }
    }
    return (count);
}

for (const l of onlyLanguages) {
    howManyLanguagesUsing.push({lang: l, count: howMany(l)})
}

console.log(howManyLanguagesUsing.sort((a, b) => {
    return b.count - a.count
}).splice(0, 10))


//console.log(mostSpokenLanguages)
console.log("mükemmel bir insanım oh yes")



































































