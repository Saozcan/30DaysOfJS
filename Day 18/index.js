console.log("Hello Mars")

//CallBack

const box = document.querySelector('.box')

/*setTimeout(() => {
    box.classList.add('bigger')
    setTimeout(() => {
        box.classList.add('circle')
        setTimeout(() => {
            box.classList.add('move')
            setTimeout(() => {
                box.classList.add('colored')
                setTimeout(() => {
                    box.classList.remove('colored')
                    setTimeout(() => {
                        box.classList.remove('move')
                        setTimeout(() => {
                            box.classList.remove('circle')
                            setTimeout(() => {
                                box.classList.remove('bigger')
                            }, 500)
                        }, 500)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
    }, 500)
}, 500)*/


//pormises
/*
new Promise((resolve, reject) => {
    resolve({
        name: 'Ali',
        surName: 'Karabay'
    })

    reject('çözülmedi')
})
    .then(data => {
        data.web = 'www.karabayyazilim.com'
        console.log(data)
    })
    .then(data => {

    })
    .catch(data => {
        console.log(data)
    })
    .finally(() => {
        console.log("Hele Finally bro")
    })
*/


/*function wait(ms) {
    return new Promise(function (resolve) {

    })
}*/


const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

wait(500)
    .then(() => {
        box.classList.add('bigger')
        return wait(500)
    })
    .then(() => {
        box.classList.add('circle')
        return wait(500)
    })
    .then(() => {
        box.classList.add('move')
        return wait(500)
    })
    .then(() => {
        box.classList.add('colored')
        return wait(500)
    })
    .then(() => {
        box.classList.remove('colored')
        return wait(500)
    })
    .then(() => {
        box.classList.remove('move')
        return wait(500)
    })
    .then(() => {
        box.classList.remove('circle')
        return wait(500)
    })
    .then(() => {
        box.classList.remove('bigger')
        return wait(500)
    })
    //.finally(() => console.log('Animasyon Bitti!'))

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.length > 4) {
            resolve(skills)
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))






















