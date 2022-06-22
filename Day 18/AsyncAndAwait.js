import {fetchFunc, url} from "./fetchAPI.js";

console.log("Async And Await")

//Async and await is an elegant way to handle promises. It is easy to understand and it clean
//to write
const  square = async function (n) {
    return n * n
}
console.log(square(2))

//The word async in front of a function means that function will return a promise. The above
//square function instead of a value it returns a promise.

//How do we access the value from the promise? To access the value from the promise,
//we will use the keyword await.

const value = await square(2)
console.log(value) // to access the value from the promise...!!!

//Now, as you can see from the above example writing async in front of a function create
//a promise and to get the value from a promise we use await.

//Let us fetch API data using both promise method and async and await method.

//promise
fetchFunc()

//async and await
const fetchData = async () => {
    try {
        const response = await fetch (url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
}
console.log('===== async and await')
fetchData()


































