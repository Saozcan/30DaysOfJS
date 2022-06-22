console.log("Hello Go")

//Error Handling
//JavaScript is a loosely-typed language. Some times you will get a runtime error when you try to access
//an undefined variable or call undefined function etc.
//JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors
//using try-catch-finally block.

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log(err)
}

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.error(err) // we can use console.log() or console.error()
} finally {
    console.log('In any case I will be executed') //
}
console.log(">>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<")

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log('Name of the error', err.name) // err is object
    console.log('Error message', err.message)
} finally {
    console.log('In any case I will be executed')
}

const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch (err) {
        console.log(err)
    }
}
throwErrorExampleFun()

































































