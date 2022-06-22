console.log("Hello Mars")
console.log("Halo")
console.log("Hi")

const arr = Array()
// or
let arr2 = new Array()
console.log(arr)

const arr3 = []
console.log(arr3)

const numbers = [0, 3.14, 9.81] // array of numbers
console.log(numbers)
console.log(numbers[1])

const vegetables = ['Tomato', 'potato', 'Cabbage']
console.log(vegetables)
console.log(vegetables.length)
console.log(vegetables[1].length)

//array can have items of different data types
const arr4 = [
    'asabeneh',
    250,
    true,
    {country: 'Finland', city: 'Helsinki'},
    {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}
]
console.log(arr4)

let js = "JavaScript"
const charsInJavaScrpit = js.split("")
console.log(charsInJavaScrpit)

const fruits = ["banana", "orange", "mango", "lemon"]
let firstFruit = fruits[0]
console.log(firstFruit)
console.log(fruits)

console.log(firstFruit.toUpperCase())

const numberss = [1, 2, 3, 4, 5]
console.log(numberss)
numberss[0] = 10
numberss[1] = 20
console.log(numberss)

const arrr = Array()
console.log(arrr)

const eightxValues = Array(8).fill('Ah') // it creates eight element values filled with 'x'
console.log(eightxValues)

//strcat
const firstList = [1, 2, 3]
const secondList = [4, 5, 9]
console.log(firstList.concat(secondList)) //
const thirdList = secondList.concat(firstList)
console.log(thirdList)

const numbersss = [1, 2, 3, 4, 5]
//console.log(numbersss.length)


console.log(numbersss.indexOf(5)) //
console.log(numbersss.indexOf(0))
console.log(numbersss.indexOf(1))
console.log(numbersss.indexOf(6))

console.log("willSend...")

console.log(numbersss.lastIndexOf(3))
console.log(numbersss.lastIndexOf(5))
console.log(numbersss.lastIndexOf(1)) // it gives the last index of the same element

console.log(typeof numbersss)

const numberToString = numbersss.toString()
console.log(numberToString)

const names = ["Asabeneh", "Mathies", "Elias", "Brook"]
console.log(names)
console.log(names.join())
console.log(names.join(''))
console.log(names.join(' '))
console.log(names.join(' # ')) // it write again but includes the character or character between every each elements

console.log(numbersss.slice())
console.log(numbersss.slice(0))
console.log(numbersss.slice(0, numbersss.length)) // slice gives a part of the string not include the last index
console.log(numbersss.slice(1, 4))

const ahmet_numbers = [1, 2, 3, 4, 5, 6, 7, 8]
ahmet_numbers.splice()
console.log(ahmet_numbers)

ahmet_numbers.splice(4,3,1,2,3)
console.log(ahmet_numbers.splice(4, 3, 1 ,2 ,3))

const   ahmet_number_2 = [1, 2, 3, 4, 5]
ahmet_number_2.push(6) // adding a new element to the last index but first it is gonna make a new place
console.log(ahmet_number_2)
ahmet_number_2.pop()    //remove the last element of the string or array
console.log(ahmet_number_2)
ahmet_number_2.shift() // remove the first element of the string or array
ahmet_number_2.unshift(0) // add a element at the beginning
console.log(ahmet_number_2)
console.log(ahmet_number_2.unshift(2, 3, 4, 5))
console.log(ahmet_number_2)

console.log(ahmet_number_2.sort()) // this function is sorting the array

const arrarOfArray = [firstList, secondList]
console.log(arrarOfArray[0])

const exerciseArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(exerciseArray)
console.log(exerciseArray.indexOf(exerciseArray.length/2 | 0)) //find to middle element of odd array

//Exercise ..... <<<<<<<<>>>><<<>>>><<<<<<<>>>>><3
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length - 1])
console.log(itCompanies[itCompanies.length / 2 | 0])
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}
console.log("-----------------------------------------------")
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase())
}
console.log(itCompanies.join(", "))

console.log(itCompanies.includes("Facebook"))
//console.log(itCompanies[1].includes("o"))
for (let i = 0; i < itCompanies.length; i++) {
    let counter_o = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] == 'o')
            counter_o++;
        if (counter_o > 1) {
            console.log(itCompanies[i])
            break
        }
    }
}

//console.log(itCompanies.sort())
//console.log(itCompanies.reverse())
console.log(itCompanies)
console.log(itCompanies.splice(0, 3)) // deleted
console.log(itCompanies) // after the splice
itCompanies.shift()
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
console.log(itCompanies.push("Ecole42"))
console.log(itCompanies)
itCompanies.splice(1,1)
console.log(itCompanies)
itCompanies.splice() // not working
console.log(itCompanies)




















