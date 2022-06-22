console.log("Hello Go")

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}

const Dog = new Animal("Josh", 12, "Black", 3)
const Cat = new Animal("Putin", 2, "BlackWhite", 4)
console.log(Dog)
console.log(Cat)

class AnimalOverride extends Animal {
    constructor(name, age, color, legs, eyes) {
        super(name, age, color, legs, eyes);
        this.eyes = eyes
    }
}
const mouse = new AnimalOverride("Micky", 3, "Black", 2, "Blue")
console.log(mouse)

///////////////////////////////////////////

class statistics {
    constructor(rest) {
        this.rest = rest
    }
    count () {
        return this.rest.reduce((acc) => acc + 1, 0) // how many numbers in ?
    }
    sum () {
        return this.rest.reduce((acc, cur) => acc + cur, 0)
    }
    min () {
        let minNum = Number.MAX_VALUE
        this.rest.forEach((value) => {
            if (value < minNum) {
                minNum = value
            }
        })
        return minNum
    }
    max () {
        let maxNum = Number.MIN_VALUE
        this.rest.forEach((value) => {
            if (value > maxNum) {
                maxNum = value
            }
        })
        return maxNum
    }
    range () {
        return this.max() - this.min()
    }
    mean () {
        return (Math.floor(this.sum() / this.rest.length) + 1)
    }
    median () {
        return this.rest.sort()[this.rest.length / 2 | 0]
    }
    mod () {
        let modNumberCount = 0
        let modNumber = 0
        this.rest.forEach((value) => {
            let tmp = 0
            let tmpNumber = 0
            this.rest.forEach((inValue) => {
                if (value === inValue) {
                    tmp++;
                    tmpNumber = value
                }
            })
            if (tmp > modNumberCount) {
                modNumberCount = tmp
                modNumber = tmpNumber
            }
        })
        return ("'mode':" + modNumber + " " + "'count':" + modNumberCount)
    }
    var () { //variance
        let numberVar = this.rest.reduce((acc, cur) => {
            return acc + Math.pow(Math.abs(cur - this.mean()), 2)
        })
        return numberVar / this.count()
    }
    std () {
        return Math.sqrt(this.var())
    }
    freqDist () {
        const retNums = []
        this.rest.forEach((value, index) => {
            if (index === this.rest.length - 1) {

                retNums.push(`(${value})`)
            }
            else {
                retNums.push(`(${value}),`)
            }
        })
        retNums.sort()
        return retNums
    }
}
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const a = new statistics(ages)
/*function count(...rest) {
    //console.log(rest)
    if (rest.every((value) => typeof "string" === value)) {
        console.log(value)
    }
}
return rest.reduce((cur, acc) => acc + cur, 0)*/
/*count(1, 2, 3, 4, [1, 2, 3, 4])*/
console.log(a.count(ages))
console.log(a.sum(ages))
console.log(a.min(ages))
console.log(a.max(ages))
console.log(a.range(ages))
console.log(a.mean(ages))
console.log(a.median(ages))
console.log(a.mod())
console.log(a.var())
console.log(a.std())
console.log(a.freqDist())































