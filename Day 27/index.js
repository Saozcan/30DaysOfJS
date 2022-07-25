document.body.style.backgroundColor = '#EDEADE';
document.body.style.fontFamily = 'Arial';
document.body.style.margin = '0';

//Create and append

//create common div
	const biggerDiv = document.createElement('div');
	document.body.appendChild(biggerDiv);

//create divs
	const firstDiv = document.createElement('div');
	const secDiv = document.createElement('div');
	const thirdDiv = document.createElement('div');
	const fourthDiv = document.createElement('div');
	const fifthDiv = document.createElement('div');

//append to body
	biggerDiv.appendChild(firstDiv);
	biggerDiv.appendChild(secDiv);
	biggerDiv.appendChild(thirdDiv);
	biggerDiv.appendChild(fourthDiv);
	biggerDiv.appendChild(fifthDiv);

//create and append div of secdiv
	const scFirstDiv = document.createElement('div');
	secDiv.appendChild(scFirstDiv);

//create and append divs of fourthdiv
	const frFirstDiv = document.createElement('div');
	const frSecDiv = document.createElement('div');
	const frThirdDiv = document.createElement('div');
	fourthDiv.appendChild(frFirstDiv);
	fourthDiv.appendChild(frSecDiv);
	fourthDiv.appendChild(frThirdDiv);

//Text

//Texts of main divs
	firstDiv.textContent = 'Asabeneh Yetayeh';
	thirdDiv.textContent = 'I am Asabeneh Yetayeh. I am instructor, developer, mativator and\
	content creator. I love educating people and creating educational materials. In January\
	2019, I also created a teaching material JavaScript For Everyone. In December 2019,\
	I created 30Days Of Python challenge and in January 2020 30 Days Of JavaScript challenge.';

//Texts of fourthdiv
	frFirstDiv.textContent = 'JAVASCPIRT FOR EVERYONE';
	frSecDiv.textContent = '30DAYS OF PYTHON';
	frThirdDiv.textContent = '30DAYS OF JAVASCRIPT';


//Style

//biggerdiv style
	biggerDiv.style.margin = '0 150px';

//firstdiv style
	firstDiv.style.fontSize = '60px';
	firstDiv.style.display = 'flex';
	firstDiv.style.justifyContent = 'flex-start';
	firstDiv.style.alignContent = 'center';
	firstDiv.style.letterSpacing = '15px'

//secdiv style
	secDiv.style.height = '80px';
	secDiv.style.backgroundColor = 'black';
	secDiv.style.display = 'flex';
	secDiv.style.justifyContent = 'center';

//scFirstDiv
	scFirstDiv.style.height = '50px';
	scFirstDiv.style.backgroundColor = 'red';

//loops
	for (let i = 0; i < 999; i++) {

	} 