console.log("Hello go")

//Classes
//JavaScript is an object oriented programming language. Everything in JavaScript is an object, with
//its properties and methods. We create class to create an object. A class is like an object constructor
//or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines
//attributes and the behavior of the object, while the object, on the other hand, represents
//the class.


//Defining a classes
//To define a class in JavaScript we need the keyword class, the name of a class in CamelCase and block
//code(two curly brackets). Let us create a class name Person.

class Person {

}

//Class Instantiation
//Instantiation class means creating an object from a class. We need the keyword "new" and
//we call the name of the class after the word new.
//Let us create a dog object from our Person class.
const person = new Person()
console.log(person)

//Class constructor
//The constructor is a builtin function which allows as to create a blueprint for our object.
//The constructor function starts with a keyword constructor followed by a parenthesis. Inside
//the parenthesis we pass the properties of the object as parameter. We use the "thi" keyword to
//attach the constructor parameters with the class.

class Person2 {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person2 = new Person2()
console.log(person2)

//All the keys of the object are undefined. When ever we instantiate we should pass the value of the
//properties. Let us pass value at this time when we instantiate the class.

const person1 = new Person2("Ahmet", "Ali")
console.log(person1)

//lets create many person objects with person class
const person3 = new Person2("Maho", "Samq")
console.log(person3)


//let us add more properties to the class
class Person3 {
    constructor(firstName, lastName, age, country, city) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}
const person4 = new Person3("Ali", "Karabay", 45, "Türkiye", "İzmir")
console.log(person4)



//Default values with constructor
//The constructor function properties may have a default value like other regular functions.
class Person4 {
    constructor(
        firstName = "Samim",
        lastName = "Ozcan",
        age = 250,
        country = "Türkiye",
        city = "İstanbul"
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}
const person5 = new Person4() // it will take the default values
console.log(person5)
const person6 = new Person4("Eren")
console.log(person6)
/*const person7 = new Person4()
console.log(person7)*/


//Class methods
//The constructor inside a calss is a builtin function which allow us to create a blueprint for the
//object. In a class we can create class methods. Methods are JavaScript functions inside the class.
//Let us create some class methods.
class Person5 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person11 = new Person5("Ahmet", "Talha", 11, "German")
console.log(person11.getFullName())

//Properties with initial value
//When we create a class for some properties we may have an initial value. For instance if you are
//playing a game, you starting score will be zero. So, we may have a starting score or score which
//is zero. In other way, we may have an initial skill and we will acquire some skill after
//some time.
class Person6 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0 // like default
        this.skills = [] //
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}
const person12 = new Person6('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person13 = new Person6('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person12.score)
console.log(person13.score)

console.log(person12.skills)
console.log(person13.skills)


//getter
//The get method allow us to access value from the object. We write a get method using keyword get
//followed by a function. Instead of accessing properties directly from the object we use getter to
//get the value. See the example bellow

class Person7 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

const person14 = new Person7('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person15 = new Person7('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person14.getScore) // We do not need parenthesis to call a getter method
console.log(person15.getScore)

console.log(person14.getSkills)
console.log(person15.getSkills)

console.log(">>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
//setter
//The setter method allow us modify the value of certain properties. We write a setter method
//using keyword "set" followed by a function. See the example bellow.
class Person8 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

const person81 = new Person8('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person82 = new Person8('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person81.setScore = 1
person81.setSkill = 'HTML'
person81.setSkill = 'CSS'
person81.setSkill = 'JavaScript'

person82.setScore = 1
person82.setSkill = 'Planning'
person82.setSkill = 'Managing'
person82.setSkill = 'Organizing'

console.log(person81.score)
console.log(person82.score)

console.log(person81.skills)
console.log(person82.skills)


//Static method







































