import {countries2} from "../Day\ 10/countries/countries_data.js";

document.body.style.backgroundColor = 'white';
document.body.style.fontFamily = 'Arial';

//Create tags
	const firstTag = document.createElement('div');
	const secTag = document.createElement('div');

//Append to body
	document.body.appendChild(firstTag);
	document.body.appendChild(secTag);

//In the third tag
	const tagOne = document.createElement('h1');
	const tagTwo = document.createElement('span');
	firstTag.appendChild(tagOne);
	firstTag.appendChild(tagTwo);

//firstTag Style
	firstTag.style.display = 'flex';
	firstTag.style.flexDirection = 'column'
	firstTag.style.alignItems = 'center'
	firstTag.style.backgroundColor = '#EDEAD5'

	//tagOne
		tagOne.innerHTML = 'World Countries Data';
		tagOne.style.color = '#fea501';
	
	//tagTwo
		tagTwo.innerHTML = `Currently, we have ${countries2.length} countries`
		tagTwo.style.marginBottom = '20px'

//secTag style
	secTag.style.display = 'flex'
	secTag.style.alignItems = 'center'
	secTag.style.flexDirection = 'column'
	secTag.style.margin = '20px 0px'
	const buttonsDiv = document.createElement('div');
	const buttonOne = document.createElement('button');
	const buttonTwo = document.createElement('button');
	secTag.appendChild(buttonsDiv);
	buttonsDiv.appendChild(buttonOne);
	buttonsDiv.appendChild(buttonTwo);
	const secTagInnerTwothTag = document.createElement('span');
	secTag.appendChild(secTagInnerTwothTag);
	//sectagInnerTworthTag style
		secTagInnerTwothTag.innerHTML = '10 Most Spoken languages in the world'
	//buttonstyles
		buttonOne.innerHTML = 'POPULATION';
		buttonTwo.innerHTML = 'LANGUAGES';
		buttonOne.style.margin = '10px 2px'
		buttonTwo.style.margin = '10px 2px'
		buttonOne.style.padding = '5px 10px'
		buttonTwo.style.padding = '5px 10px'
		buttonOne.style.backgroundColor = '#fea501'
		buttonTwo.style.backgroundColor = '#fea501'
		buttonOne.style.border = 'none'
		buttonTwo.style.border = 'none'

const languages = []
	countries2.map(value => {
	if (value.languages.length === 1){
		languages.push(value.languages[0])
	} else {
		for (let i = 0; i < value.languages.length; i++) {
			languages.push(value.languages[i])
		}
	}
})
const counts = []
const languagesUnique = new Set(languages)
for (const l of languagesUnique) {
	const filteredLang = languages.filter((lng) => lng === l)
	counts.push({name: l, count: filteredLang.length})
}

counts.sort((a, b) => {
	return b.count - a.count;
})
console.log(counts)
/*const mostUseLanguages = languages.map(value => {

})*/

const mostPopulation = countries2.map(value => ({name: value.name, count: value.population}))



let totalPopulation = 0
mostPopulation.forEach(value => {
	totalPopulation += value.count
})

mostPopulation.push({name: 'Total Poputalation', count: totalPopulation});

mostPopulation.sort((a,b) => {
	return b.count - a.count;
})



//thirdTAg style
const thirdTag = document.createElement('div');
document.body.appendChild(thirdTag);
thirdTag.style.display = 'flex';
thirdTag.style.flexDirection = 'column';
thirdTag.style.alignItems = 'center';
const afterClick = (data) => {
	for (let i = 0; i < 10; i++) {
		const takeThreeTags = document.createElement('div');
		const firstInThird = document.createElement('div');
		const secInThird = document.createElement('div');
		const thirdInThird = document.createElement('div');
		thirdTag.appendChild(takeThreeTags);
		takeThreeTags.appendChild(firstInThird)
		takeThreeTags.appendChild(secInThird)
		takeThreeTags.appendChild(thirdInThird)
		thirdTag.style.display = 'flex'
		thirdTag.style.justifyContent = 'center'
		//takeThreeTags style
		takeThreeTags.style.display = 'flex';
		takeThreeTags.style.alignContent = 'space-around';
		takeThreeTags.style.alignItems = 'center';
		takeThreeTags.style.marginBottom = '5px';

		//firsttagInthird Sty
		firstInThird.innerText = data[i].name
		firstInThird.style.display = 'flex'
		firstInThird.style.justifyContent = 'flex-start'
		firstInThird.style.alignItems = 'center'

		//firstInThird.style.backgroundColor = 'red'
		firstInThird.style.width = '120px'
		firstInThird.style.height = '40px'

		//secTagInThird style
		secInThird.style.backgroundColor = '#fea501'
		secInThird.style.borderRadius = '6px'
		secInThird.style.width = `${(counts[i].count) * (600 / 100)}px`
		secInThird.style.marginRight = `${600 - (counts[i].count) * (600 / 100)}px`
		secInThird.style.height = '40px'

		//thirdInThird.style.backgroundColor = 'orange'
		thirdInThird.innerHTML = data[i].count.toLocaleString()
		thirdInThird.style.width = '120px'
		thirdInThird.style.marginLeft = '5px'
		thirdInThird.style.height = '40px'
		thirdInThird.style.display = 'flex'
		thirdInThird.style.justifyContent = 'flex-start'
		thirdInThird.style.alignItems = 'center'
	}
}

afterClick(mostPopulation)

buttonTwo.addEventListener('click', ev => {
	thirdTag.innerHTML = ''
	afterClick(counts)
})


buttonOne.addEventListener('click', ev => {
	thirdTag.innerHTML = ''
	afterClick(mostPopulation)
})
























































