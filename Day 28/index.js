
{
	const buttonAddPlayer = document.getElementById('buttonAddPlayer');
	const nameValue = document.getElementById('inputName');
	const lastNameValue = document.getElementById('inputLastName');
	const countryValue = document.getElementById('inputCountry');
	const pointValue = document.getElementById('inputPoint');

	const divInput = document.getElementById('divInput');

	let nameV = 'Ahmet'
	let lastNameV = 'Hakan'
	let countryNameV = 'Turkiye'
	let pointNameV = '99'

	nameValue.addEventListener('input', e => {
		nameV = e.target.value;
	})
	lastNameValue.addEventListener('input', e => {
		lastNameV = e.target.value;
	})
	countryValue.addEventListener('input', e => {
		countryNameV = e.target.value;
	})
	pointValue.addEventListener('input', e => {
		pointNameV = e.target.value;
	})
	buttonAddPlayer.addEventListener('click', ev => {

		const firstDiv = document.createElement('div');
		
		const frFirstDiv = document.createElement('div');
		const frSecDiv = document.createElement('div');
		const frThirdDiv = document.createElement('div');
		
		const frFrFirstDiv = document.createElement('div');
		const frFrSecDiv = document.createElement('div');

		const frScFirstDiv = document.createElement('div');
		const frScSecDiv = document.createElement('div');

		const frThrdFirstDiv = document.createElement('button');
		const frThrdSecDiv = document.createElement('button');
		const frThrdThirdDiv = document.createElement('button');

		divInput.appendChild(firstDiv);

		firstDiv.appendChild(frFirstDiv); //name lastname
		firstDiv.appendChild(frSecDiv);
		firstDiv.appendChild(frThirdDiv);

		frFirstDiv.appendChild(frFrFirstDiv); //name lastname
		frFirstDiv.appendChild(frFrSecDiv); //date

		frSecDiv.appendChild(frScFirstDiv); // country
		frSecDiv.appendChild(frScSecDiv); // point

		frThirdDiv.appendChild(frThrdFirstDiv);
		frThirdDiv.appendChild(frThrdSecDiv);
		frThirdDiv.appendChild(frThrdThirdDiv);

		firstDiv.style.display = 'flex';
		firstDiv.style.alignItems = 'center';
		firstDiv.style.justifyContent = 'space-around';
		firstDiv.style.height = '100px';

		frSecDiv.style.display = 'flex';
		frSecDiv.style.alignItems = 'center';

		frFrFirstDiv.innerHTML = `${nameV} ${lastNameV}`;
		frScFirstDiv.innerHTML = `${countryNameV}`;
		frScSecDiv.innerHTML = `${pointNameV}`;

		frThrdFirstDiv.innerHTML = 'Cop';
		frThrdSecDiv.innerHTML = '+5';
		frThrdThirdDiv.innerHTML = '-5';
		frThrdFirstDiv.className = 'innerButton';
		frThrdSecDiv.className = 'innerButton';
		frThrdThirdDiv.className = 'innerButton';
		
	})
}


