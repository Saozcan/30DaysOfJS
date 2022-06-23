console.log("Hello")

const url = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/22_Day_Manipulating_DOM_object/22_day_starters/project_3/data/challenges_info.js'
fetch(url)
	.then (response => console.log(response))
	.then (data => {
		//console.log(data)
	})



