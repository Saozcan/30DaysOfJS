document.body.style.backgroundColor = 'white';

//DOM (Document Object Model)-Day 3

//Event Listers
//Common HTML events: onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. We can add event
//listener method to any DOM object. 
// We use addEventListener() method to listen different event types on HTML elements. The addEventListener()
//method takes two arguments, an event listener and a callback function.

/* selectedElement.addEventlister('eventlistener', function(e) {})
//or
selectedElement.addEventlister('evenetlistener', e => {}) */

//Click
document.body.appendChild(document.createElement('button'));
const button = document.querySelector('button');
button.addEventListener('click', e => {
	console.log('e gives the event listener object:', e);
	console.log('e.target gives the selected element: ', e.target)
	console.log(
		'e.target.textContent gives content of selected element: ',
		e.target.textContent
	)
	//alert('We can attach event on HTML element')
})

//Double Click
button.addEventListener('dblclick', e => {})

//Mouse enter //When your mouse on the click its func will work
document.body.appendChild(document.createElement('button'))
const buttonSec = document.querySelectorAll('button')
buttonSec[1].addEventListener('mouseenter', e => {
	console.log('e gives the event listener object:', e)
})

//By now you are familiar with addEventListen method and how to attach event listener. There are many types of event
//listeners. But in this challenge we will focus the most common important events. List of events:
	//click
	//dblclick
	//mouseenter
	//mouseleave
	//mouseever
	//mouseout
	//input when value enter to input field
	//change when value change on input fielld
	//blur -when the element is not focused
	//keydown
	//keyup
	//keypress
	//onload -when the browser has finished loading a page

//Gettin value from an input element
//We usually fill forms and forms accept data. Form fields are created using input HTML element. Let us build
//a small application which allow us to calculate body mas index of a person using two input fields, one button
//and one p tag

//input value
document.body.appendChild(document.createElement('h1'))
document.querySelector('h1').innerHTML = 'Body Mass Index Calculator'
document.body.appendChild(document.createElement('input'))
document.body.appendChild(document.createElement('input'))
document.body.appendChild(document.createElement('button'))
document.querySelectorAll('button')[2].innerHTML = 'Calculate BMI'

const buttonBmi = document.querySelectorAll('button')[2]
const mass = document.querySelectorAll('input')[0]
const height = document.querySelectorAll('input')[1]
let bmi 
buttonBmi.addEventListener('click', e => {
	bmi = mass.value / height.value ** 2
	alert(`your bmi is ${bmi.toFixed(2)}`)
	console.log(bmi)
})


//input event and change
//in the above example, we managed to get input values from two input fields by clicking button. How about
//if we want to get value without click the button. We can use the change or input event type to get data right 
//away from the input field when the field is on focus. Let us see how we will handle that
document.body.appendChild(document.createElement('h1'))
document.querySelectorAll('h1')[1].innerHTML = 'Data Binding using input or change event'
document.body.appendChild(document.createElement('input'))
document.querySelectorAll('input')[2].type = 'text'
document.querySelectorAll('input')[2].placeholder = 'say something'  //blur written
document.body.appendChild(document.createElement('p'))

const inputSec = document.querySelectorAll('input')[2]
const p = document.querySelector('p')
p.style.backgroundColor = 'purple'
p.style.width = 'fit-content'
//p.style.display = 'inline-block'

inputSec.addEventListener('input', e => {
	//input event and change
		//p.textContent = e.target.value
	//blur event
		p.textContent = 'Field is required'
		p.style.color = 'red'
		p.style.boxShadow = '5px 5px #888888'
})

inputSec.addEventListener('focus', e => {
	inputSec.style.border = '5px solid yellow'
	inputSec.style.outline = 'none'
})
const borderValues = inputSec.style.border

inputSec.addEventListener('focusout', e => {
	inputSec.style.border = borderValues

})
//








































