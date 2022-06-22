const divDom = document.querySelectorAll('div')
const liDom = document.querySelectorAll('li')
const h1Dom = document.querySelectorAll('h1')
const h2Dom = document.querySelectorAll('h2')
//divDom[0].style.textAlign = 'center'
console.log(h1Dom)
h1Dom[0].style.textAlign = 'center'
h2Dom[0].style.textAlign = 'center'
h2Dom[0].style.textDecoration = 'underline'
h2Dom[0].style.fontWeight = 'normal'
h2Dom[0].style.margin = '10px'
h1Dom[0].textContent = 'Asabeneh Yetayeh challenges in'
const textNode = document.createTextNode('2022');
const tag = document.createElement('h1')
tag.appendChild(textNode);
tag.style.display = 'inline-block'
tag.style.margin = '10px'
h1Dom[0].appendChild(tag)
h1Dom[0].style.margin = '10px'

liDom.forEach((value, i) => {
    liDom[i].style.listStyleType = 'none';
    liDom[i].style.padding = '20px';
    liDom[i].style.marginRight = '25%'
    liDom[i].style.borderStyle = 'solid';
    liDom[i].style.borderWidth = '1px'
    liDom[i].style.borderColor = 'white';
    liDom[i].style.marginLeft = '25%'
    liDom[i].style.fontWeight = 'normal'
    if (liDom[i].textContent.includes('Done')) {
        liDom[i].style.backgroundColor = 'green';
    } else if (liDom[i].textContent.includes('Ongoing')) {
        liDom[i].style.backgroundColor = 'yellow';
    } else if (liDom[i].textContent.includes('Coming')) {
        liDom[i].style.backgroundColor = 'red'
    }
})

const giveHexNumber = () => {
    const hexString = '0123456789ABCDEF';
    let value = parseInt(Math.random() * 15);
    return hexString[value];
}
const takeHexNumber = () => {
    const hexNumber = []
    for (let i = 0; i < 6 ; i++) {
        hexNumber.push(giveHexNumber());
    }
    return hexNumber.join('')
}

const under10Sec = number => {
    if (number < 10) {
        return ('0' + number)
    }
}

const getDate = () => {
    const monthNames = ['January', 'February', 'March', 'April',
    'May', 'June', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date()
    const month = monthNames[d.getMonth()];
    const day = d.getDate()
    const year = d.getFullYear()
    const hour = d.getHours()
    const minute = d.getMinutes()
    const sec = d.getSeconds()
    return `${month} ${day < 10 ? '0' + day : day},\
 ${year} ${hour < 10 ? '0' + hour : hour}:\
${minute < 10 ? '0' + minute : minute}:${sec < 10 ? '0' + sec : sec}`
}
const dateText = document.createTextNode(getDate)
const dateTag = document.createElement('p')

dateTag.style.fontSize = '20px'
dateTag.style.textAlign = 'center'
dateTag.style.padding = '10px'
dateTag.style.marginLeft = '40%'
dateTag.style.marginRight = '40%'
dateTag.style.textDecoration = 'none'
//dateTag.style.removeProperty("text-decoration")
divDom[0].insertBefore(dateTag, document.querySelectorAll('ul')[0])
dateTag.appendChild(dateText);

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
const changeColor = () => {
    tag.style.color = `#${takeHexNumber()}`
    dateTag.innerText = getDate().toString()
    dateTag.style.backgroundColor = `#${takeHexNumber()}`
    dateTag.style.textDecoration = "none";
}
const deneme = async () => {
    for (let i = 0; i < 100; i++) {
        //console.log(i)
        await wait(1000)
        changeColor()
    }
}
deneme()

































































