console.log('Day 22')

//Creating an Element
const newElement = document.createElement('h1')
const newElementText = document.createTextNode('HelloMaho')
newElement.appendChild(newElementText)
newElement.style.color = 'white'
const bodyElement = document.querySelector('body')
bodyElement.appendChild(newElement)

//Creating Multiple Elements
let title
for (let i = 0; i < 5; i++) {
	title = document.createElement('h2');
	title.className = 'title';
	title.style.fontSize = i;
	title.style.color = 'purple'
	title.style.marginLeft = '30%'
	title.textContent = i;
	console.log(title);
	bodyElement.appendChild(title)   //document.body.appendChild(title) //same
}

//Removing a child emement from a parent node
bodyElement.removeChild(title); //it removes onyle last created element













































































