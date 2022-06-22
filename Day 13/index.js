console.log("Hello Go")

//Console object methods
console.log("%c30 Days Of JavaScript", "color:green") // log output is green
console.log(
    "%c30 Days%c %cOf%c %cJavaScript%c",
    "color:green",
    "",
    "color:red",
    "",
    "color:yellow"
)


//consolo.warm()
//We use console.warm() to give warning on browser. For instance to inform or warm deprecation of
//version of a package or bad practices. Copy the following code and paste on browser console
//to see warning messages.

console.warn("This is a warning")
console.warn("You are using React. Do not touch the DOM. Virtual DOM will take care" +
    "of handling the DOM!")
console.warn("Warning is different from error")

//console.error()
//The console.error() method shows an error messages.
console.error("This is an error message")

//console.table()
//The console.table() method display data as a table on the console. Displays tabular data as a table
//The console.table() takes one required argument data, which must be an array or an object,
//and one additional optional parameter columns.
//Let us first start with a simple array. The code below displays a table with two columns. An index
//column to display the index and value column to display the names
const names = ["Fatih", "Ahmet", "Hakan"]
console.table(names)

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)


//console time ()
//Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and
//may have up to 10 000 timers running on a given page. When you call console.timeEnd() with the same
//name, the browser will output the time, in milliseconds, that elapsed since the timer was started.
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.time('Regular for loop') // start
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop') // finish

console.time('for of loop')
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')


//console.info
//it displays information message on browser console.
console.info("30 Days Of JavaScript challenge is trending on Github") // looks like log

//console.assert()
//This methods writes an error message to the console if the assertion is false. If the assertion is
//true, nothing happens. The first parameter is an assertion expression. If this expression is false,
//an Assertion failed error message will be displayed.
console.assert(4 > 3, "4 is greater than 3")
console.assert(3 > 3, "3 is greater than 3") // gives an error


//console.group)=
//This method can help to group different log groups. Copy the following code and paste it
//on browser console to the groups.
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

//console.count()
//It prints the number of times the console.count() is called. It takes a string label parameter.
//It is very helpful to count the number of times a function is called. In the following example,
//this method will run three times.
const func = () => {
    console.count("Function has been called")
}
func()
func()
func()

//console.clear
//console.clear() // yeah likes its name



























































































































