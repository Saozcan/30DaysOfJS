import{countries2} from "../Day\ 10/countries/countries_data.js"

document.body.style.backgroundColor = '#EDEADE'
document.body.style.fontFamily = 'Arial'
document.body.style.margin = '0'

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
    const bfImgTag = document.createElement('img')
    const bfFirstTag = document.createElement('h1')
    const bfSecTag = document.createElement('span')
    const bfThirdTag = document.createElement('span')
    const bfFourthTag = document.createElement('div')
    const bfFifthTag = document.createElement('div')
    bodyFirstTag.appendChild(bfImgTag)
    bodyFirstTag.appendChild(bfFirstTag)
    bodyFirstTag.appendChild(bfSecTag)
    bodyFirstTag.appendChild(bfThirdTag)
    bodyFirstTag.appendChild(bfFourthTag)
    bodyFirstTag.appendChild(bfFifthTag)
    bfFirstTag.id = 'bfFirstTag'
    bfSecTag.id = 'bfSecTag'
    bfThirdTag.id = 'bfThirdTag'
    bfFourthTag.id = 'bfFourthTag'
    bfFifthTag.id = 'bfFifth'
    bfImgTag.setAttribute('src', 'globe-2.jpg')


//create button tags group
    const btnFirstTag = document.createElement('button')
    const btnSecTag = document.createElement('button')
    const btnThirdTag = document.createElement('button')
    bfFourthTag.appendChild(btnFirstTag)
    bfFourthTag.appendChild(btnSecTag)
    bfFourthTag.appendChild(btnThirdTag)

//bodyFirstTag style
    bodyFirstTag.style.display = 'flex'
    bodyFirstTag.style.alignItems = 'center'
    bodyFirstTag.style.flexDirection = 'column'

    //bfimgtag style
    bfImgTag.style.display = 'flex'
    bfImgTag.style.alignItems = 'center'
    bfImgTag.style.flexDirection = 'column'
    bfImgTag.style.backgroundSize = 'cover'
    bfImgTag.style.height = '70vh'
    bfImgTag.style.width = '100%'
    bfImgTag.style.objectFit = 'cover'
    bfImgTag.style.padding = '0'
    bfImgTag.style.margin = '0'
    bfImgTag.style.objectPosition = '30% 50%'
    //bfImgTag.style.transform = 'scale(0.9)'

    //bfFirstTag stle
    bfFirstTag.innerText = 'WORLD COUNTRIES LIST'
    bfFirstTag.style.letterSpacing = '15px'
    bfFirstTag.style.position = 'absolute'
    bfFirstTag.style.top = '15%'
    bfFirstTag.style.color = 'white'

    //bfSecTag style
    bfSecTag.innerText = `Total Number of Countries: ${countries.length}`
    bfSecTag.style.position = 'absolute'
    bfSecTag.style.top = '27%'
    bfSecTag.style.color = 'white'

    //bfFourthTag (Buttons) style
    bfFourthTag.style.position = 'absolute'
    bfFourthTag.style.top = '40%'
        //firstButton
        btnFirstTag.innerText = 'STARTING WORD'
        btnFirstTag.style.height = '35px'
        btnFirstTag.style.backgroundColor = '#672AB7FF'
        btnFirstTag.style.color = 'white'
        btnFirstTag.style.border = 'none'
        btnFirstTag.style.marginRight = '10px'
        //secondButton style
        btnSecTag.innerText = 'SEARCH WITH ANU WORD'
        btnSecTag.style.height = '35px'
        btnSecTag.style.backgroundColor = '#672AB7FF'
        btnSecTag.style.color = 'white'
        btnSecTag.style.border = 'none'
        btnSecTag.style.marginRight = '10px'

        //thirdButton
        btnThirdTag.innerText = 'LowerOrGreater'
        btnThirdTag.style.height = '35px'
        btnThirdTag.style.backgroundColor = '#672AB7FF'
        btnThirdTag.style.color = 'white'
        btnThirdTag.style.border = 'none'

    //bfFifthTag (search bar)
    const searchBar = document.createElement('input')
    const searchClick = document.createElement('i')
    bfFifthTag.appendChild(searchBar)
    bfFifthTag.appendChild(searchClick)
    bfFifthTag.style.position = 'absolute'
    bfFifthTag.style.top = '50%'
    bfFifthTag.style.display = 'flex'
        //searchBar style
        searchBar.style.width = '300px'
        searchBar.style.borderRadius = '15px'
        searchBar.style.border = 'none'
        searchBar.style.padding = '5px'
        //searchClick
        searchClick.setAttribute('class', 'bx bx-search-alt-2')
        searchClick.style.color = 'white'
        searchClick.style.fontSize = '25px'
        searchClick.style.marginLeft = '10px'


//bodySecTag
    bodySecTag.style.display = 'flex'
    bodySecTag.style.justifyContent = 'space-around'
    bodySecTag.style.margin = '0 10%'
    for (let i = 0; i < 4; i++) {
        const bsTags = document.createElement('div')
        const bsTagImg = document.createElement('img')
        const bsTagText = document.createElement('span')
        bodySecTag.appendChild(bsTags)
        bsTags.appendChild(bsTagImg)
        bsTags.appendChild(bsTagText)
        bsTagImg.setAttribute('src', 'map_image.jpg')

        //bstags style
        bsTags.style.margin = '10px'

        //bsTagImg style
        bsTagImg.style.backgroundSize = 'cover'
        bsTagImg.style.height = '100%'
        bsTagImg.style.width = '80vh'
        bsTagImg.style.objectFit = 'cover'
        bsTagImg.style.clip = 'rect(10px 10px 10px 10px)'
    }











