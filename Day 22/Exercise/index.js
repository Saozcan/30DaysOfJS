
//Creat elements
	const firstTag = document.createElement('h1')
	const secTag = document.createElement('h2')
	const thirdTag = document.createElement('h3')
	const divTag = document.createElement('div')

//Creat ContentTexts
	const firstTagText = document.createTextNode('Number Generator');
	const secTagText = document.createTextNode('30DaysOfJavaScript:DOM Day 2');
	const thirdTagText = document.createTextNode('Author: Asabeneh Yetayeh');

//Append texts to tags
	firstTag.appendChild(firstTagText);
	secTag.appendChild(secTagText);
	thirdTag.appendChild(thirdTagText);

//Append tags to body
	document.body.appendChild(firstTag);
	document.body.appendChild(secTag);
	secTag.appendChild(thirdTag);
	document.body.appendChild(divTag);
	
//Style firstTag
	firstTag.style.textAlign = 'center'
	firstTag.style.margin = '15px'
	firstTag.style.marginBottom = '10px'
	
//Style secTag
	secTag.style.textAlign = 'center'
	secTag.style.textDecoration = 'underline'
	secTag.style.fontWeight = 'normal'
	secTag.style.margin = '0px'
	
//Style thirdTag	
	thirdTag.style.textAlign = 'center'
	thirdTag.style.textDecoration = 'none'
	thirdTag.style.fontWeight = 'normal'
	thirdTag.style.margin = '0px'
	//thirdTag.style.display = 'inline'

//Style divTag
	divTag.style.borderLeft = '25%'
	divTag.style.borderRight = '25%'
	divTag.style.marginTop = '1%'

const isPrime = num => {
	if (num === 2) {
		return true;
	} else if (num < 2) {
		return false;
	}
	for (let i = 2; i <= num / 2; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

	let nums = 0;
	for (let i = 0; i < 17; i++) {
		const secDivTag = document.createElement('div');
		secDivTag.style.display = 'flex';
		secDivTag.style.flexWrap = 'nowrap';
		secDivTag.style.justifyContent = 'center'
		for (let j = 0; j < 6; j++) {
			const thirdDivTag = document.createElement('div');
			const thirdDivText = document.createTextNode(nums);
			thirdDivTag.appendChild(thirdDivText);
			secDivTag.appendChild(thirdDivTag)
			thirdDivTag.style.color = 'while'
			thirdDivTag.style.backgroundColor = 'purple'
			thirdDivTag.style.textAlign = 'center'
			thirdDivTag.style.margin = '5px'
			thirdDivTag.style.padding = '20px'
			thirdDivTag.style.border = '20px'
			thirdDivTag.style.width = '50px'
			if (isPrime(nums)) {
				thirdDivTag.style.backgroundColor = 'red'
			} else if (nums % 2 === 0) {
				thirdDivTag.style.backgroundColor = 'green'
			} else {
				thirdDivTag.style.backgroundColor = 'yellow'
			}
			nums++;
		}
		divTag.appendChild(secDivTag);
	}

























