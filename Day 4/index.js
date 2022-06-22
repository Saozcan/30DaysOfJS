

console.log("Hello Mars")
console.log("Halo")

let condition = 5

if (condition)
{
    console.log("Say true")
}

let num = 3
if (num > 0)
{
    console.log(`${num} is a positive number`)
}

let isRainig = true
if (isRainig)
{
    console.log("Remember to take your rain coat")
}

let weather = 'cloudy'
switch (weather)
{
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you nedd a jacket.')
        break
    default:
        console.log('No need for rain coat.')
}

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day)
{
    case 'monday':
        console.log('Today is Monday')
        break
    default:
        console.log('It is not a week day.')
}