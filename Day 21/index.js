console.log('Document Object Model (DOM)')

//Getting Element
//We can access already created element or elements using JavaScript. To access or get elements we use
//different methods. The code below has four h1 elements. Let us see the different methods to access the
//h1 elements.


//Getting Elements by tag name
const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)

//An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forE
for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]);
}

//Ill do it better
const justDiv = document.getElementsByTagName('div');
console.log(justDiv) //it writes all the documents about div
console.log(justDiv[0]) // only return its values
for (let i = 0; i < justDiv.length; i++) {
    console.log(justDiv[i]);
}


//Getting an element by id
let firstTitle = document.getElementById('first-title')
console.log(firstTitle)


//Getting elements by using querySelector methods
//querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it
//selects only the first element.
let firstTitle1 = document.querySelector('h1') //select the first available h1 element
let firstTitle2 = document.querySelector('#first-title') //select id with first-title #!!!!!#!!!!
let firstTitle3 = document.querySelector('.title') //select the first available element with class title

//querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which
//is an array like object which supports array methods. We can use for loop or forEach to loop through each
//nodeList elements.
const allTitles2 = document.querySelectorAll('h1')
console.log(allTitles2)
//We can use forEach
allTitles2.forEach((value) => console.log(value))


//Adding attribute
const titles = document.querySelectorAll('h1')
/*titles[3].className = 'title'
titles[3].id = 'fourth-title'*/
/*
const titles = document.querySelectorAll('h1')
titles[4].setAttribute('class', 'title') Not working bro
titles[4].setAttribute('id', 'fourth-title')
*/

//Adding class using classList
//titles[3].classList.add('title', 'header-title') not working again

//Removing class using remove
//Similar to adding we can also remove class from an element. We can remove a specific class from an element.
console.log(titles[2])
titles[2].classList.remove('title', 'third-title')
console.log('>>>>>>>>>>>>><<<<<<<<<<<<')
console.log(titles[2]) //i dont understand bro
//not working

//Adding Text to HTML element
//An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using
//the property textContent or *innerHTML

//Adding Text content using textContent
//the textContent property is used to add text to an HTML element.
titles[3].textContent = 'Fourth Title---'

//Inner HTML
//You can check the inner.html file to see how is it working exactly
//for understanding
//We use innerHTML property when we like to replace or a completely new children content to a parent element.
//It value we assign is going to be a string of HTML elements.

//The innerHTML property can allow us also to remove all the children of a parent element. Instead of using
//removeChild() like innerRemove.html file


//Adding style
//Adding style color
//Let us add some style to our titles. If the element has even index we give it green color else red.
titles.forEach((title, i) => {
    if (i % 2 === 0) {
        title.style.color = 'green'
    } else {
        title.style.color = 'red' // awesome
    }
})

//Adding style background color
/*titles.forEach((title, i) => {
    if (i % 2 === 0) {
        title.style.background = 'red'
    } else {
        title.style.background = 'green' // awesome
    }
})*/

//Adding style font size
titles.forEach((title, i) => {
    title.style.fontSize = '24px' // this is important, all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.fontSize = '20px'
    } else {
        title.style.fontSize = '30px'
    }
})


//Be careful all CSS properties be camelCase in js




























































