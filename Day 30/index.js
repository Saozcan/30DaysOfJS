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


		//imgDiv.src = countries_data[i].flag;
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
const inputBar = document.getElementById('inputBar');
let searchCountries = [];
inputBar.addEventListener('input', e => {
	searchCountries = [];
	countries_data.forEach(element => {
		if ((element.name.toUpperCase()).includes(e.target.value.toUpperCase())) {
			searchCountries.push(element);
		}
	})
	console.log(searchCountries);
	makeBoxes(searchCountries);
})