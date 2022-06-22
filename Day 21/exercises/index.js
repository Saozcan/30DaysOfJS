console.log('Exercises')

//1.1
const tagName = document.querySelector('p') //select the first paragraph
console.log(tagName)

//1.2
/*const eachOfTheParagraph = document.querySelector('#p')
console.log(eachOfTheParagraph)*/

//1.3
const pAsNodeList = document.querySelectorAll('p') // as a nodelist
console.log(pAsNodeList)
for (let i = 0; i < pAsNodeList.length; i++) {
    console.log(pAsNodeList[i].innerText);
}

//1.4
pAsNodeList[3].textContent = 'Fourth Paragraph'
pAsNodeList[3].innerText = 'Fourth Paragraph'
console.log(pAsNodeList[3].innerText)
console.log(pAsNodeList[3].textContent)

//1.5
pAsNodeList[0].id = 'id-p';
pAsNodeList[0].className = 'paragraph';
console.log(pAsNodeList[0])
pAsNodeList[1].setAttribute('id', 'id-p1')
pAsNodeList[1].setAttribute('class', 'paragraph')
console.log(pAsNodeList[1])
pAsNodeList[2].classList.add('paragraph', 'id-p2') // ??
console.log(pAsNodeList[2])

//2.1
pAsNodeList[0].style.color = 'green'
pAsNodeList[1].style.background = 'green'
pAsNodeList[2].style.borderStyle = 'dotted'
pAsNodeList[3].style.fontSize = '50px'

pAsNodeList.forEach((value, i) => {
    if (i % 2 === 0) {
        pAsNodeList[i].style.color = 'red'
        pAsNodeList[i].style.background = 'green'
    } else {
        pAsNodeList[i].style.color = 'green'
        pAsNodeList[i].style.background = 'red'
    }
})

















































