import {countries_data} from "../Day 27/countries_data.js";

//Currently, we have ... countries
let totalCountries = 0;
countries_data.forEach(element => {
	totalCountries++;
});
document.getElementById('classH3').innerHTML = `Currently, we have ${totalCountries} countries`;


const countriesDiv = document.getElementById('countries');
countriesDiv.style.display = 'flex';
const makeBoxes = (data) => {
	countriesDiv.innerHTML = '';
	for (let i = 0; i < data.length; i++) {
		const countriesFirDiv = document.createElement('div');
		const imgDiv = document.createElement('img');
		const headerInCountry = document.createElement('p');
		const ulListDiv = document.createElement('div');
		const ulList = document.createElement('ul')
		const liCapital = document.createElement('li');
		const liLanguages = document.createElement('li');
		const liPopulation = document.createElement('li');

		countriesDiv.appendChild(countriesFirDiv);
		countriesFirDiv.appendChild(imgDiv);
		countriesFirDiv.appendChild(headerInCountry);
		countriesFirDiv.appendChild(ulListDiv);
		ulListDiv.appendChild(ulList);
		ulList.appendChild(liCapital);
		ulList.appendChild(liLanguages);
		ulList.appendChild(liPopulation);

		ulListDiv.style.width = '190px';
		ulListDiv.style.height = '100px';

		ulList.style.listStyle = 'none';
		ulList.style.padding = '0 10px';
		ulList.style.color = 'grey';
		ulList.style.marginTop = '15px';

		countriesFirDiv.style.margin = '10px';
		countriesFirDiv.style.height = '350px';
		countriesFirDiv.style.width = '250px';
		countriesFirDiv.style.display = 'flex';
		countriesFirDiv.style.justifyContent = 'flex-start';
		countriesFirDiv.style.alignItems = 'center';
		countriesFirDiv.style.flexDirection = 'column';
		countriesFirDiv.style.margin = '20px';
		countriesFirDiv.style.backgroundColor = '#f9f6e9';

		headerInCountry.style.width = '100px';
		headerInCountry.style.textAlign = 'center';
		headerInCountry.style.color = '#f1a93c';


		imgDiv.src = data[i].flag;
		headerInCountry.innerHTML = data[i].name.toUpperCase();
		liCapital.innerHTML = `Capital: ${(data[i].capital)}`;
		liLanguages.innerHTML = `Languages: ${data[i].languages}`;
		liPopulation.innerHTML = `Population: ${data[i].population.toLocaleString()}`;
		imgDiv.style.width = '190px';
		imgDiv.style.height = '100px';
		imgDiv.style.display = 'flex';
		imgDiv.style.justifyContent = 'center';
		imgDiv.style.alignContent = 'center';
		imgDiv.style.margin = '20px';
	}
}
makeBoxes(countries_data);

//input bar 
const inputBar = document.getElementById('inputBar');
let searchCountries = [];
let searchValue = 'name';
inputBar.addEventListener('input', e => {
	searchCountries = [];
	if (searchValue === 'name') {
		countries_data.forEach(element => {
			if ((element.name.toUpperCase()).includes(e.target.value.toUpperCase())) {
				searchCountries.push(element);
			}
		})
	}
	if (searchValue === 'capital') {
		countries_data.forEach(element => {
			if (element.capital && (element.capital.toUpperCase()).includes(e.target.value.toUpperCase())) {
				searchCountries.push(element);
			}
		})
	}
	if (searchValue === 'population') {
		
	}
	console.log(searchCountries);
	makeBoxes(searchCountries);
})

//buttons
const nameButton = document.getElementById('nameButton');
const capitalButton = document.getElementById('capitalButton');
const populationButton = document.getElementById('populationButton');
let checkFirstName = 0;
let checkFirstCapital = 0;
let checkFirstPopulation = 0;
nameButton.addEventListener('click', e => {
	if (checkFirstName === 0) {
		nameButton.innerHTML = `NAME <i class='bx bx-up-arrow-alt' ></i>`;
		checkFirstName = 1;
		capitalButton.innerHTML = 'CAPITAL';
		populationButton.innerHTML = 'POPULATION';
	}
	else {
		nameButton.innerHTML = `NAME <i class='bx bx-down-arrow-alt' ></i>`;
		checkFirstName = 0;
		capitalButton.innerHTML = 'CAPITAL';
		populationButton.innerHTML = 'POPULATION';
	}
	searchValue = 'name';
})
capitalButton.addEventListener('click', e => {
	if (checkFirstCapital === 0) {
		capitalButton.innerHTML = `CAPITAL <i class='bx bx-up-arrow-alt' ></i>`;
		checkFirstCapital = 1;
		nameButton.innerHTML = 'NAME';
		populationButton.innerHTML = 'POPULATION';
	}
	else {
		capitalButton.innerHTML = `CAPITAL <i class='bx bx-down-arrow-alt' ></i>`;
		checkFirstCapital = 0;
		nameButton.innerHTML = 'NAME';
		populationButton.innerHTML = 'POPULATION';
	}
	searchValue = 'capital';
})
populationButton.addEventListener('click', e => {
	if (checkFirstPopulation === 0) {
		populationButton.innerHTML = `POPULATION <i class='bx bx-up-arrow-alt' ></i>`;
		checkFirstPopulation = 1;
		nameButton.innerHTML = 'NAME';
		capitalButton.innerHTML = 'CAPITAL';
	}
	else {
		populationButton.innerHTML = `POPULATION <i class='bx bx-down-arrow-alt' ></i>`;
		checkFirstPopulation = 0;
		nameButton.innerHTML = 'NAME';
		capitalButton.innerHTML = 'CAPITAL';
	}
})