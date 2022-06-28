document.body.style.backgroundImage = 'url(./images/galaxy.gif)';




// newTags
	const firstTag = document.createElement('h1')
	const secTagDiv = document.createElement('div')
	const thirdTagDiv = document.createElement('div')

// append to body
	document.body.appendChild(firstTag);
	document.body.appendChild(secTagDiv);
	document.body.appendChild(thirdTagDiv);

//Texts
	firstTag.innerHTML = 'Calculate a weight of an object on a planet'

//bodyTagStyle
	document.body.style.fontFamily = 'Arial'

//firstTagStyle
	firstTag.style.color = 'white'
	firstTag.style.textAlign = 'center'
	firstTag.style.letterSpacing = '2px'
	firstTag.style.wordSpacing = '4px'
	firstTag.style.margin = '50px 0px 100px 0px'

//sectag Style
	secTagDiv.style.display = 'flex'
	secTagDiv.style.justifyContent = 'center'
	secTagDiv.style.height = '37px'

//Planets
const planets = [
	{name: 'Earth', mess: 9.8},
	{name: 'Jupiter', mess: 24.8},
	{name: 'Mars', mess: 3.7},
	{name: 'Mercury', mess: 3.7},
	{name: 'Moon', mess: 1.62},
	{name: 'Neptune', mess: 11.15},
	{name: 'Pluto', mess: 9.81},
	{name: 'Saturn', mess: 10.44},
	{name: 'Uranus', mess: 8.69},
	{name: 'Venus', mess: 8.78}
]

//Tags of secTagDiv
	const inputInSec = document.createElement('input');
	const selectTagInSec = document.createElement('select')
	secTagDiv.appendChild(inputInSec);
	secTagDiv.appendChild(selectTagInSec);
	selectTagInSec.appendChild(document.createElement('option'))
	document.querySelector('option').value = ""
	document.querySelector('option').innerHTML = "--select planet--"
	planets.forEach(element => {
		const planetTag = document.createElement('option');
		selectTagInSec.appendChild(planetTag);
		planetTag.innerHTML = element.name;
		planetTag.value = element.mess;
	});
	const buttonInSec = document.createElement('button');
	secTagDiv.appendChild(buttonInSec);

//buttonTag style
	buttonInSec.innerHTML = 'Calculate weight'
	buttonInSec.style.marginLeft = '10px'
	buttonInSec.style.backgroundColor = 'grey'
	buttonInSec.style.color = 'white'

//inputinsec style
	inputInSec.style.marginRight = '10px'
	inputInSec.placeholder = 'Mess in Kilogram'

//selecttag style
	selectTagInSec.style.width = '130px'
	selectTagInSec.style.color = 'black'

//thirdTag style
	thirdTagDiv.style.backgroundColor = 'rgba(128, 128, 128, 0.4)'
	thirdTagDiv.style.height = '250px'
	thirdTagDiv.style.margin = '1% 20%'
	thirdTagDiv.style.display = 'flex'
	thirdTagDiv.style.alignItems = 'center'
	thirdTagDiv.style.justifyContent = 'space-around'

//createTag in thirdTag
	const imgTagInThird = document.createElement('div');
	const resultTagInThird = document.createElement('div');
	thirdTagDiv.appendChild(imgTagInThird);
	thirdTagDiv.appendChild(resultTagInThird);

//returntagstyle
	resultTagInThird.style.display = 'flex'
	resultTagInThird.style.alignItems = 'center'
	resultTagInThird.style.justifyContent = 'center'

//imgTag
	imgTagInThird.style.backgroundImage = 'url(./images/earth.png)'
	imgTagInThird.style.width = '200px'
	imgTagInThird.style.height = '200px'
	imgTagInThird.style.backgroundSize = 'cover'
	imgTagInThird.style.display = 'block'


//selectPanel after event
	selectTagInSec.addEventListener('change', e => {
		let imgName;
		if (!e.target.value) {
			imgTagInThird.style.display = 'none'
			return
		}
		imgTagInThird.style.display = 'block'
		planets.forEach(element => {
			if (element.mess == e.target.value) {
				imgName = element.name.toLowerCase()
			}
		})
		imgName = `./images/${imgName}.png`
		imgTagInThird.style.backgroundImage = `url(${imgName})`
		imgTagInThird.style.width = '200px'
		imgTagInThird.style.height = '200px'
		imgTagInThird.style.backgroundSize = 'cover'
	})

//button Event
	buttonInSec.addEventListener('click', e => {
		if (parseInt(inputInSec.value)) {
			console.log(parseInt(inputInSec.value))
			resultTagInThird.style.display = 'block'
		} else {
			resultTagInThird.style.display = 'block'
			imgTagInThird.style.display = 'none'
			resultTagInThird.innerHTML = 'Mass is required'
		}
		resultTagInThird.style.width = '200px'
		resultTagInThird.style.height = '200px'
		resultTagInThird.style.backgroundColor = 'rgba(128, 128, 128, 0.3)'
	})

//resulttaginthird style
/* 	resultTagInThird.style.width = '200px'
	resultTagInThird.style.height = '200px'
	resultTagInThird.style.backgroundColor = 'rgba(128, 128, 128, 0.3)' */
/* 	resultTagInThird.style.width = "fit-content"
	resultTagInThird.style.minWidth = "200px"
	resultTagInThird.style.margin = "10px"
	resultTagInThird.style.padding = "10px"
	resultTagInThird.style.display = "none";
	resultTagInThird.style.alignSelf = "center"
	resultTagInThird.style.textAlign = "center"
	resultTagInThird.innerHTML = "asdadas" */









