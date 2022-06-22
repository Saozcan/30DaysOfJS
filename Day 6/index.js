const numbers = [1, 2, 3, 4, 5]
let newArray = []
let sum = 0
for (let i = 0; i <numbers.length; i++){
    newArray.push(numbers[i] ** 3)
}
console.log(newArray)

for (const element of newArray){
    sum += element
}
console.log(sum)

for (const number of numbers){
    console.log(number)
}

for(let i = 0; i < 6; i++){
    if (i == 3) {
        continue
    }
    console.log(i)
}

let i = 1;
const stringArr = []
while (i <= 7){
    stringArr.push("#")
    console.log(stringArr.join(""))
    i++;
}

i = 0;
let j = 0;
while (i < 11){
    console.log(`${i} x ${i} = ${i ** 2}`)
    i++
}


i = 0;
j = 0;
console.log("i  i^2  i^3")
while( j <= 10)
{
    console.log(`${i}   ${i ** 2}   ${i ** 3}`)
    j++;
    i++;
}



i = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++;
}






































