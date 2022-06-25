

const isPrime = number => {
	if (number < 2) {
		return false
	} else if (number === 2) {
		return true
	}
	for (let i = 2; i <= number / i; i++) {
		if (number % i === 0) {
			return false
		}
	}
	return true
}

document.body.style.backgroundColor = '#EDEAE5' //AWESOME white color !!!

//Create Tags
	const firstTag = document.createElement('h1')
	const secTag = document.createElement('p')
	const thirdTag = document.createElement('p')
	const inputTopTag = document.createElement('p')
	const inputTag = document.createElement('input')
	const buttonTag = document.createElement('button')
	const numDivTag = document.createElement('div')

//Tags append to body
	document.body.appendChild(firstTag)
	document.body.appendChild(secTag)
	document.body.appendChild(thirdTag)
	document.body.appendChild(inputTopTag)
	document.body.appendChild(inputTag)
	document.body.appendChild(buttonTag)
	document.body.appendChild(numDivTag)

//Texts to Tags
	firstTag.innerHTML = 'Number Generator'
	secTag.innerHTML = '30DaysOfJavaScript:DOM Day 3'
	thirdTag.innerHTML = 'Autor: Asabeneh Yetayeh'
	buttonTag.innerHTML = 'Generate numbers'
	inputTag.placeholder = 'Generate more numbers...'

//body style
	document.body.style.textAlign = 'center'
	document.body.style.fontFamily = 'arial'

//inputTopTag style
	inputTopTag.style.color = 'red'
	inputTopTag.style.textAlign = 'left'
	inputTopTag.style.margin = '0 21.8%'

//inputTag styl
	inputTag.style.width = '500px'
	inputTag.style.height = '25px'
	inputTag.style.marginRight = '35px'

//buttonTag style
	buttonTag.style.width = '150px'
	buttonTag.style.height = '31.5px'
	buttonTag.style.backgroundColor = 'green'
	buttonTag.style.color = '#EDEAE5'

//numDivTag style
	numDivTag.style.display = 'flex'
	numDivTag.style.flexWrap = 'wrap'
	numDivTag.style.justifyContent = 'flex-start'
	numDivTag.style.marginLeft = '16%'
	numDivTag.style.marginRight = '17%'


let numberOfDivs = ''
inputTag.addEventListener('input', e => {
	numberOfDivs = parseInt(e.target.value)
})
buttonTag.addEventListener('click', e => {
	numDivTag.innerHTML = ''
	console.log(numberOfDivs)
	if (numberOfDivs === "") {
		inputTopTag.innerHTML = 'None'
	} else if (!numberOfDivs) {
		console.log('number')
		inputTopTag.innerHTML = 'They are not number.'
	} else {
		inputTopTag.innerHTML = ''
	}
	for (let i = 0; i < numberOfDivs; i++) {
		const innerDiv = document.createElement('div')
		numDivTag.appendChild(innerDiv)
		innerDiv.innerHTML = i
		innerDiv.style.margin = '5px'
		innerDiv.style.width = '70px'
		innerDiv.style.height = '35px'
		innerDiv.style.color = '#EDEAE5'
		//even, odd, prime
		if (isPrime(i)) {
			innerDiv.style.backgroundColor = 'red'
		} else if (i % 2 === 0) {
			innerDiv.style.backgroundColor = 'green'
		} else {
			innerDiv.style.backgroundColor = 'orange'
		}
		//Center to center babba
		innerDiv.style.display = 'flex'
		innerDiv.style.alignItems = 'center'
		innerDiv.style.justifyContent = 'center'
	}
})





























