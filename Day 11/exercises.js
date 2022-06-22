import {countries2} from "./countries/countries_data.js";

console.log("Hello go")

countries2.forEach((country) => {
    let {name, capital, languages, population} = country
    console.log(name, capital, population, languages)
})

const students = [
    ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["Josh", ["HTML", "CSS", "JS", "React"], [980, 185, 920, 495]]
]
//let [, skils, scores] = student
//console.log(student[0], skils, scores.splice(2,2))

function convertArrayToObject(students) {
    const retObj = []
    students.forEach((person) => {
        let [, skills1, scores1] = person
        retObj.push({
            name: person[0],
            skills: skills1,
            scores: scores1
        })
    })
    return retObj
}

const retVal = convertArrayToObject(students)
console.log(retVal)
console.log(retVal[1].name)

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

let {...newStudent} = student
console.log(newStudent)
let {name, age, skills} = newStudent
skills.frontEnd.push({skill: "Bootstrap", level: 8})
skills.backEnd.push({skill: "Express", level: 9})
skills.dataBase.push({skill: "SQL", level: 8})
skills.dataScience.push("SQL")
console.log(skills)



































