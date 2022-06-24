import { getDate } from "../../libft/getDateWithZeros.js"
import { takeHexNumber } from "../../libft/takeHexNumber.js"
import { asabenehChallenges2020 } from "./project_3.js"

console.log('Exercise 3')

//Create Tags
	const firstTag = document.createElement('h2')
	const firstChildTag = document.createElement('h1')
	const secTag = document.createElement('h3')
	const thirdTag = document.createElement('p')
	const divTag = document.createElement('div')

//Create Text of tags
	const firstTagText = document.createTextNode('Asabeneh Yetayeh challenges in ')
	const firstChildTagText = document.createTextNode('2022') // take the year
	const secTagText = document.createTextNode('30DaysOfJavaScript Challenge')
	const thirdTagText = document.createTextNode(getDate())
	
//Append texts to tags
	firstTag.appendChild(firstTagText)
	firstTag.appendChild(firstChildTag)
	firstChildTag.appendChild(firstChildTagText)
	secTag.appendChild(secTagText)
	thirdTag.appendChild(thirdTagText)

//Append tags to body
	document.body.appendChild(firstTag)
	document.body.appendChild(secTag)
	document.body.appendChild(thirdTag)
	document.body.appendChild(divTag)

//Body style
	document.body.style.textAlign = 'center'

//first tag style
	firstTag.style.display = 'inline'
	firstTag.style.fontFamily = 'Arial'

//firstChild style
	firstChildTag.style.display = 'inline'
	firstChildTag.style.fontSize = '60px'
	firstChildTag.style.color = `#${takeHexNumber()}`

//second tag style
	secTag.style.fontWeight = 'normal'
	secTag.style.fontFamily = 'Arial'
	secTag.style.fontSize = '18px'
	secTag.style.textDecoration = 'underline'

//third tag style
	thirdTag.style.backgroundColor = `#${takeHexNumber()}`
	thirdTag.style.display = 'inline-block'
	thirdTag.style.padding = '15px'
	thirdTag.style.paddingTop = '10px'
	thirdTag.style.paddingBottom = '10px'
	thirdTag.style.margin = '0px'

//div tag style
	//divTag.style.backgroundColor = 'purple'
	//divTag.style.width = '100px'
	divTag.style.marginLeft = '20%'
	divTag.style.marginRight = '20%'
	divTag.style.marginTop = '20px'
	divTag.style.textAlign = 'center'
	divTag.style.justifyContent = 'center'
	divTag.style.alignItems = 'center'
	divTag.style.display = 'flex'
	divTag.style.flexDirection = 'column'
	//divTag.style.flexWrap = 'nowrap'

//Take variables
	//const challenges = asabenehChallenges2020.challenges
	//const challengesName = challenges.map((value) => value.name) //
	//const challengesStatus = challenges.map((value) => value.status)
	const challengesFullNames = asabenehChallenges2020.challenges.map((value) => value.name)
	const onlyNames = challengesFullNames.map((value) => value.substring(value.indexOf('Of') + 3))
	const keywordsOfNames = asabenehChallenges2020.challenges.map(value => value.topics)
	//console.log(asabenehChallenges2020.author.titles)

//it will be in for
	for (let i = 0; i < 7; i++) {
		const tagInner = document.createElement('div');
		divTag.appendChild(tagInner);
		tagInner.style.color = 'white'
		tagInner.style.width = '700px'
		tagInner.style.height = '30px'
		//tagInner.style.backgroundColor = 'black'
		if (asabenehChallenges2020.challenges[i].status === 'Done') {
			tagInner.style.backgroundColor = 'green'
		} else if (asabenehChallenges2020.challenges[i].status === 'Ongoing') {
			tagInner.style.backgroundColor = 'orange'
		} else {
			tagInner.style.backgroundColor = 'red'
		}
		tagInner.style.textAlign = 'center'
		tagInner.style.paddingTop = '20px'
		tagInner.style.paddingBottom = '15px'
		tagInner.style.paddingLeft = '15px'
		tagInner.style.paddingRight = '15px'
		tagInner.style.margin = '3px'
		tagInner.style.display = 'flex'
		tagInner.style.flexWrap = 'nowrap'
		tagInner.style.justifyContent = 'space-between'
		for (let j = 0; j < 3; j++) {
			const tagInnerInner = document.createElement('div')
			if (j == 1) {
				const detailsTag = document.createElement('details')
				const detailsTagUl = document.createElement('ul')
				detailsTagUl.style.listStyle = 'none'
				detailsTag.appendChild(detailsTagUl)
				for (let k = 0; k < keywordsOfNames[i].length; k++) {
					const keywordTag = document.createElement('li')
					keywordTag.innerHTML = keywordsOfNames[i][k];
					keywordTag.style.textAlign = 'left'
					const keywordTagText= document.createTextNode(keywordsOfNames[i][k])
					keywordTag.appendChild[keywordTagText]
					detailsTagUl.appendChild(keywordTag)
					keywordTag.style.color = 'white'
				}
				detailsTag.onclick = function () {
					if (tagInner.style.height === '30px') {
						//tagInner.style.backgroundColor = 'green'
						tagInner.style.height = 'fit-content'
					} else {
						//tagInner.style.backgroundColor = 'black'
						tagInner.style.height = '30px'
					}
				}
				tagInnerInner.appendChild(detailsTag)
				const summaryTag = document.createElement('summary')
				const summaryTagText = document.createTextNode(onlyNames[i])
				summaryTag.appendChild(summaryTagText)
				const pTag = document.createElement('p')
				detailsTag.appendChild(summaryTag)
				detailsTag.appendChild(pTag)
			}  else if (j == 0) {
				const tagInnerInnerText = document.createTextNode(asabenehChallenges2020.challenges[i].name)
				tagInnerInner.appendChild(tagInnerInnerText)
				tagInnerInner.style.alignItems = 'center'
				tagInnerInner.style.justifyContent = 'center'
				tagInnerInner.style.display = 'flex'
			} else {
				const tagInnerInnerText = document.createTextNode(asabenehChallenges2020.challenges[i].status)
				tagInnerInner.appendChild(tagInnerInnerText)
				tagInnerInner.style.alignItems = 'center'
				tagInnerInner.style.justifyContent = 'center'
				tagInnerInner.style.display = 'flex'
			}
			tagInner.appendChild(tagInnerInner);
			tagInnerInner.style.textAlign = 'center'
		}
	}
	
//After languages Autor social links
	const fullNameTag = document.createElement('span')
	const fullNameTagText = document.createTextNode(asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName)
	divTag.appendChild(fullNameTag)
	fullNameTag.appendChild(fullNameTagText)
	fullNameTag.style.fontFamily = 'roboto'
	fullNameTag.style.fontWeight = 'bold'
	const divForAwesomeFormate = document.createElement('div')
	divTag.appendChild(divForAwesomeFormate)
	divForAwesomeFormate.style.display = 'flex'
	for (let i = 0; i < 3; i++) {
		const sec = document.createElement('div')
		sec.innerHTML = asabenehChallenges2020.author.socialLinks[i].fontawesomeIcon
		divForAwesomeFormate.appendChild(sec)
		sec.style.margin = '5px'
		sec.style.fontSize = '25px'
		sec.onclick = function () {
			window.open(asabenehChallenges2020.author.socialLinks[i].url, '_blank')
		}
	}

//About autor 
	const introAutor = document.createElement('p')
	divTag.appendChild(introAutor)
	introAutor.innerHTML = asabenehChallenges2020.author.bio


//Titles Skills Qualifications
	const autorTag = document.createElement('div')
	document.body.appendChild(autorTag);
	autorTag.style.display = 'flex'
	autorTag.style.marginLeft = '16%'
	autorTag.style.marginRight = '18%'
	autorTag.style.justifyContent = 'space-between'
	const titlesTag = document.createElement('div')
	const skillsTag = document.createElement('div')
	const qualificationsTag = document.createElement('div')
	autorTag.appendChild(titlesTag)
	autorTag.appendChild(skillsTag)
	autorTag.appendChild(qualificationsTag)
	//Titles
		const titleUlTag = document.createElement('ul')
		titlesTag.appendChild(titleUlTag)
		titleUlTag.style.textAlign = 'left'
		const titleOfTitleTag = document.createElement('li')
		titleUlTag.appendChild(titleOfTitleTag)
		titleOfTitleTag.innerHTML = 'Title'
		titleOfTitleTag.style.listStyle = 'none'
		titleOfTitleTag.style.textAlign = 'left'
		titleOfTitleTag.style.fontWeight = 'bold'
		titleOfTitleTag.style.fontFamily = 'Arial'
		for (let i = 0; i < asabenehChallenges2020.author.titles.length; i++) {
			const titleLiTag = document.createElement('li')
			titleUlTag.appendChild(titleLiTag)
			titleLiTag.innerHTML = asabenehChallenges2020.author.titles[i][0] + asabenehChallenges2020.author.titles[i][1] 
			titleLiTag.style.listStyle = 'none'
		}
	//Skills
		const skillUlTag = document.createElement('ul')
		skillsTag.appendChild(skillUlTag)
		for (let i = -1; i < asabenehChallenges2020.author.skills.length; i++) {
			const skillLiTag = document.createElement('li')
			skillUlTag.appendChild(skillLiTag)
			if (i === -1) {
				skillLiTag.innerHTML = 'Skills'
				skillLiTag.style.fontWeight = 'bold'
			} else {
				skillLiTag.innerHTML = `<i class="fa-solid fa-check" 
				style="background-color: green;
				color: white;
				'"></i> ${asabenehChallenges2020.author.skills[i]}`
			}
			skillLiTag.style.listStyle = 'none'
			skillLiTag.style.textAlign = 'left'
			skillLiTag.style.fontFamily = 'Arial'
			skillLiTag.style.margin = '5px'
		}
	//Qualifications
		const qualificationsUlTag = document.createElement('ul')
		qualificationsTag.appendChild(qualificationsUlTag)
		qualificationsUlTag.style.textAlign = 'left'
		const qualificationsOfTitleTag = document.createElement('li')
		qualificationsUlTag.appendChild(qualificationsOfTitleTag)
		qualificationsOfTitleTag.innerHTML = 'Qualifications'
		qualificationsOfTitleTag.style.listStyle = 'none'
		qualificationsOfTitleTag.style.textAlign = 'left'
		qualificationsOfTitleTag.style.fontWeight = 'bold'
		qualificationsOfTitleTag.style.fontFamily = 'Arial'
		for (let i = 0; i < asabenehChallenges2020.author.qualifications.length; i++) {
			const qualificationsLiTag = document.createElement('li')
			qualificationsUlTag.appendChild(qualificationsLiTag)
			qualificationsLiTag.innerHTML = asabenehChallenges2020.author.qualifications[i]
			qualificationsLiTag.style.listStyle = 'none'
			qualificationsLiTag.style.textAlign = 'left'
			qualificationsLiTag.style.fontFamily = 'Arial'
			qualificationsLiTag.style.margin = '4px'
		}

	//Keywords
		const keywordsWordTag = document.createElement('div')
		document.body.appendChild(keywordsWordTag)
		keywordsWordTag.innerHTML = 'Keywords'
		keywordsWordTag.style.fontFamily = 'roboto'
		keywordsWordTag.style.fontWeight = 'bold'
		keywordsWordTag.style.fontSize = '20px'
		keywordsWordTag.style.textAlign = 'left'
		keywordsWordTag.style.marginLeft = '16%'

		//Keywords tags
			const keywordsTag = document.createElement('div')
			document.body.appendChild(keywordsTag)
			keywordsTag.style.display = 'flex'
			keywordsTag.style.flexWrap = 'wrap'
			keywordsTag.style.justifyContent = 'space-around'
			keywordsTag.style.marginLeft = '16%'
			keywordsTag.style.marginRight = '18%'
			for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
				const keywordTag = document.createElement('div')
				keywordsTag.appendChild(keywordTag)
				keywordTag.innerHTML = `# ${asabenehChallenges2020.keywords[i]}`
				keywordTag.style.fontFamily = 'roboto'
				keywordTag.style.fontSize = '16px'
				keywordTag.style.backgroundColor = `#${takeHexNumber()}`
				keywordTag.style.borderRadius = '15px'
				keywordTag.style.padding = '5px'
				keywordTag.style.fontFamily = 'italic'
				keywordTag.style.textAlign = 'left'
				keywordTag.style.margin = '3px'
			}


	const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
	const changeColorFunc = () => {
		thirdTag.style.backgroundColor = `#${takeHexNumber()}`
		firstChildTag.style.color = `#${takeHexNumber()}`
		thirdTag.innerText = getDate().toString()
	}
	export const changeColor = async () => {
		for (let i = 0; i; i++) {
			await wait(1000)
			changeColorFunc()
		}
	}
	changeColor()







