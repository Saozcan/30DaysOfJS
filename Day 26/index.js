import{countries2} from "../Day\ 10/countries/countries_data.js"

document.body.style.backgroundColor = '#EDEADE'
document.body.style.fontFamily = 'Arial'

const countries = []
countries2.map(value => {
    countries.push(value.name)
})

//create first elements group (bf)
    const bodyFirstTag = document.createElement('div')
    const bodySecTag = document.createElement('div')
    document.body.appendChild(bodyFirstTag)
    document.body.appendChild(bodySecTag)
    bodyFirstTag.id = 'bodyFirstTag'
    bodySecTag.id = 'bodySecTag'

//create bodyFirst elemsts group
    const bfFirstTag = document.createElement('h1')
    const bfSecTag = document.createElement('span')
    const bfThirdTag = document.createElement('span')
    const bfFourthTag = document.createElement('div')
    bodyFirstTag.appendChild(bfFirstTag)
    bodyFirstTag.appendChild(bfSecTag)
    bodyFirstTag.appendChild(bfThirdTag)
    bodyFirstTag.appendChild(bfFourthTag)
