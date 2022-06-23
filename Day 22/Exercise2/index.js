console.log('Day 22 Exercise 2');

const newDatas = []
const url = 'https://restcountries.com/v2/all'
//let dataLenght = 0
function fetchFunc() {
	fetch(url)
		.then(response => response.json()) // accessing the API data as json
		//you can use any name in first then section
		.then(data => {
			//			dataLenght = data.length
			//gettin the data
			//console.log(data)
			data.forEach((value) => {
				newDatas.push(
					value.name.toUpperCase()
				)
			})
			domCreate()
		})
		.catch(error => console.error(error)) // handling error if something wrong happens

}
fetchFunc()

function domCreate() {

	//Creat Tags
	const firstTag = document.createElement('h1')
	const secTag = document.createElement('h2')
	const thirdTag = document.createElement('h3')
	const fourthTag = document.createElement('h3')
	const divTag = document.createElement('div')

	//Creat TextNode
	const firstTagText = document.createTextNode('WORLD COUNTRIES LIST')
	const secTagText = document.createTextNode(`Total Number of countries: ${newDatas.length}`)
	const thirdTagText = document.createTextNode('30DaysOfJavaScript DOM-Day-2')
	const fourthTagText = document.createTextNode('Author: Asabeneh Yetayeh')

	//Append texxts to Tags
	firstTag.appendChild(firstTagText)
	secTag.appendChild(secTagText)
	thirdTag.appendChild(thirdTagText)
	fourthTag.appendChild(fourthTagText)

	//Append tags to body
	document.body.appendChild(firstTag)
	document.body.appendChild(secTag)
	document.body.appendChild(thirdTag)
	document.body.appendChild(fourthTag)
	document.body.appendChild(divTag)

	//firstTagStyle
	firstTag.style.textAlign = 'center'
	firstTag.style.fontSize = '45px'
	firstTag.style.letterSpacing = '11px'
	firstTag.style.fontFamily = 'Arial'
	firstTag.style.margin = '0px'

	//secTagStyle
	secTag.style.margin = '0px'
	secTag.style.textAlign = 'center'

	//thirdTagStyle
	thirdTag.style.fontWeight = 'normal'
	thirdTag.style.margin = '0px'
	thirdTag.style.textAlign = 'center'
	
	//fourthTagStyle
	fourthTag.style.margin = '0px'
	fourthTag.style.fontWeight = 'normal'
	fourthTag.style.textAlign = 'center'
	fourthTag.style.marginBottom = '70px'

	//divTagSty
	divTag.style.justifyContent = 'center'
	divTag.style.margin = 'auto'

	let numb = 0;
	for (let i = 0; i < newDatas.length / 6; i++) {
		const secDivTag = document.createElement('div')
		divTag.appendChild(secDivTag)
		secDivTag.style.display = 'flex'
		secDivTag.style.flexWrap = 'nowrap'
		secDivTag.style.justifyContent = 'center'	
		for (let j = 0; j < 6; j++) {
			const countryDivTag = document.createElement('div')
			const counteryText = document.createTextNode(newDatas[numb++])
			countryDivTag.appendChild(counteryText)
			secDivTag.appendChild(countryDivTag)
			countryDivTag.className = j;
			countryDivTag.style.textAlign = 'center'
			countryDivTag.style.padding = '2%'
			countryDivTag.style.border = '2px'
			countryDivTag.style.borderStyle = 'double'
			countryDivTag.style.borderColor = '#dbdbdb'
			countryDivTag.style.margin = '10px'
			countryDivTag.style.width = '120px'
			countryDivTag.style.height = '100px'
			countryDivTag.style.verticalAlign = 'middle'
			//Text in to the middle
			countryDivTag.style.alignItems = 'center'
			countryDivTag.style.display = 'flex';
			countryDivTag.style.justifyContent = 'center'
			if (numb > newDatas.length - 1) {
				break;
			}
		}
	}
}







































