import {url} from "./fetchAPI.js";

console.log("Exercises...")

const newData = {}
const newDatas = []

fetch(url)
    .then(response => response.json())
    .then(data => {
       // console.log(data)
        /*data.forEach(({name, capital, languages, population, area }) => {
            newDatas.push({
                name,
                capital,
                languages,
                population,
                area,
            })
        })*/
        data.map((value) => {
            newDatas.push({
                name: value.name,
                capital: value.capital,
                languages: value.languages,
                population: value.population.toLocaleString(),
                area: value.area
            })
        })
       // console.log(newDatas)
})
    .catch(error => console.error(error))


const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const catNames = []

fetch(catsAPI)
    .then(response => response.json())
    /*.then(data => {
        data.map((value) => {
            catNames.push({
                name: value.name
            })
        })
    })*/
    .then(data => {
        data.map((value) => {
            //console.log(value)
        })
        return data
    })
    .then(data => {
        let number = 0
        let number2 = 0
        data.map((value) => {
            //console.log(value.weight.metric)
            number += parseInt(value.weight.metric.split(' ')[0])
            number2 += parseInt(value.weight.metric.split(' ')[2])
        })
        //console.log(number)
        console.log(`Total weight average ${(number / data.length).toFixed(2)} - ${(number2 / data.length).toFixed(2)}`)
    })
//console.log(catNames)

const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const countries_areas = []
        data.map((value) => {
            countries_areas.push({
                name: value.name,
                area: value.area
            })
        })
        console.log(countries_areas.sort((a, b) => b.area - a.area))
    return data
    })
    .then(data => {
        console.log(data)
        const languages = []
        data.map((value) => {
            value.languages.map((language) => {
                languages.push(language.name)
            })
        })
        let uniqueLanguages = [...new Set(languages)]
        console.log(uniqueLanguages.sort().length)
    })




































