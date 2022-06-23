import { getDate } from "../../libft/getDateWithZeros.js"
import { takeHexNumber } from "../../libft/takeHexNumber.js"

console.log('Exercise 3')

//Create Tags
	const firstTag = document.createElement('h2')
	const firstChildTag = document.createElement('h1')
	const secTag = document.createElement('h3')
	const thirdTag = document.createElement('p')
	const divTag = document.createElement('div')

//Create Text of tags
	const firstTagText = document.createTextNode('Asabeneh Yetayeh challenges in ')
	const firstChildTagText = document.createTextNode('2022') // take the year
	const secTagText = document.createTextNode('30DaysOfJavaScript Challenge')
	const thirdTagText = document.createTextNode(getDate())
	
//Append texts to tags
	firstTag.appendChild(firstTagText)
	firstTag.appendChild(firstChildTag)
	firstChildTag.appendChild(firstChildTagText)
	secTag.appendChild(secTagText)
	thirdTag.appendChild(thirdTagText)

//Append tags to body
	document.body.appendChild(firstTag)
	document.body.appendChild(secTag)
	document.body.appendChild(thirdTag)
	document.body.appendChild(divTag)

//Body style
	document.body.style.textAlign = 'center'

//first tag style
	firstTag.style.display = 'inline'
	firstTag.style.fontFamily = 'Arial'

//firstChild style
	firstChildTag.style.display = 'inline'
	firstChildTag.style.fontSize = '60px'
	firstChildTag.style.color = `#${takeHexNumber()}`

//second tag style
	secTag.style.fontWeight = 'normal'
	secTag.style.fontFamily = 'Arial'
	secTag.style.fontSize = '18px'
	secTag.style.textDecoration = 'underline'

//third tag style
	thirdTag.style.backgroundColor = `#${takeHexNumber()}`
	thirdTag.style.display = 'inline-block'
	thirdTag.style.padding = '15px'
	thirdTag.style.paddingTop = '10px'
	thirdTag.style.paddingBottom = '10px'
	thirdTag.style.margin = '0px'

//div tag style
	//divTag.style.backgroundColor = 'purple'
	//divTag.style.width = '100px'
	divTag.style.height = '100px'
	divTag.style.marginLeft = '20%'
	divTag.style.marginRight = '20%'
	divTag.style.marginTop = '20px'
	divTag.style.textAlign = 'center'
	//divTag.style.border = '1px solid green'
	//divTag.style.display = 'flex'
	//divTag.style.flexWrap = 'nowrap'

//it will be in for
	for (let i = 0; i < 7; i++) {
		const tagInner = document.createElement('div');
		divTag.appendChild(tagInner);
		tagInner.style.color = 'white'
		tagInner.style.width = '700px'
		tagInner.style.height = '30px'
		tagInner.style.backgroundColor = 'black'
		tagInner.style.textAlign = 'center'
		tagInner.style.paddingTop = '20px'
		tagInner.style.paddingBottom = '15px'
		tagInner.style.paddingLeft = '15px'
		tagInner.style.paddingRight = '15px'
		tagInner.style.margin = '3px'
		tagInner.style.display = 'flex'
		tagInner.style.flexWrap = 'nowrap'
		tagInner.style.justifyContent = 'space-between'
		for (let j = 0; j < 3; j++) {
			const tagInnerInner = document.createElement('div')
			const tagInnerInnerText = document.createTextNode('Hello')
			tagInnerInner.appendChild(tagInnerInnerText)
			tagInner.appendChild(tagInnerInner);
			//tagInnerInner.style.backgroundColor = 'white'
			tagInnerInner.style.textAlign = 'center'
		}
	}
	
let number = 30;

const timerTag = document.createElement('div')
timerTag.appendChild(document.createTextNode(number))
document.body.appendChild(timerTag)
timerTag.style.width = '20px'
timerTag.style.height = '20px'
let number5 = 5
const timer = setInterval((number5) => {
	timerTag.innerText = number--;
}, 1000)
if (number === 0) {
	clearInterval(timer)
}





	const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
	const changeColorFunc = () => {
		thirdTag.style.backgroundColor = `#${takeHexNumber()}`
		firstChildTag.style.color = `#${takeHexNumber()}`
		thirdTag.innerText = getDate().toString()
	}
	export const changeColor = async () => {
		for (let i = 0; i < 100; i++) {
			//console.log(i)
			await wait(1000)
			changeColorFunc()
		}
	}
	changeColor()







