

document.body.style.backgroundColor = "#EDEADE";

const data = "30 DAYS OF JAVASCRIPT CHALLENGE 2020 EMRE KALP SAMIM";
const fontFamilyArray = [
	"Arial",
	"Cambria",
	"Georgia",
];

const firstDiv = document.createElement('div');
document.body.appendChild(firstDiv);

const giveHexNumber = () => {
    const hexString = '0123456789ABCDEF';
    let value = parseInt(Math.random() * 15);
    return hexString[value];
}
export const takeHexNumber = () => {
    const hexNumber = []
    for (let i = 0; i < 6 ; i++) {
        hexNumber.push(giveHexNumber());
    }
    return hexNumber.join('')
}

const changeColorFunc = () => {
    return `#${takeHexNumber()}`
}


const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

export const changeColor = async () => {
    for (;;) {
		firstDiv.innerHTML = '';
		for (let i = 0; i < data.length; i++) {
			const letterP = document.createElement('span');
			firstDiv.appendChild(letterP);
			letterP.innerHTML = data[i];
			letterP.style.color = changeColorFunc();
			letterP.style.fontSize = '100px';
			letterP.id = 'box';
			document.body.style.backgroundColor = changeColorFunc();
		}
		firstDiv.style.fontFamily = fontFamilyArray[Math.floor(Math.random() * 3)];
        await wait(2000)
        changeColorFunc()
    }
}
changeColor()
