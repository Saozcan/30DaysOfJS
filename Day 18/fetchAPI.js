console.log("Fetch API")

//Fetch API
export const url = 'https://restcountries.com/v2/all' //countries api
export function fetchFunc() {
        fetch(url)
            .then(response => response.json()) // accessing the API data as json
            //you can use any name in first then section
            .then(data => {
                    //gettin the data
                    console.log(data)
            })
            .catch(error => console.error(error)) // handling error if something wrong happens
}

























































