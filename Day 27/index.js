

const skills = [
	'Educator',
	'Programmer',
	'Instructor',
	'Motivator',
	'Content Creater'
]

const languages = [
	'REACT',
	'REDUX',
	'PYTHON',
	'PANDAS',
	'JAVASCRIPT',
	'MONGODB',
	'NUMPY'
]

const div1 = document.getElementsByClassName('animation');
const div2 = document.getElementsByClassName('fifthDiv');

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
const changeColorFunc = () => {
}
export const changeColor = async () => {
    for (let i = 0; i < 5; i++) {
        await wait(2000);
		div1[0].innerHTML = skills[i];
		div2[0].innerHTML = `The technologies I teach ${languages[i]}`;
		if (i == 4) {
			i = 0;
		}
    }
}
changeColor()
