console.log('Day 22 Exercise 2');

const url = 'https://restcountries.com/v2/all'
function fetchFunc() {
	fetch(url)
		.then(response => response.json()) // accessing the API data as json
		//you can use any name in first then section
		.then(data => {
				//gettin the data
				console.log(data)
		})
		.catch(error => console.error(error)) // handling error if something wrong happens
}













































