console.log("Hello go")

//Declaring regular expression without global flag and case insensitive flag.
//without flag
let pattern = "love"
let regEx = new RegExp(pattern)
console.log(regEx)

//Declaring regular expression with global flag and case insensitive flag.
let flag = "gi"
let regEx2 = new RegExp(pattern, flag)
console.log(regEx2)

//Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp
//constructor
let regEx3 = new RegExp("love", "gi") // same but different way

//Creating a pattern without RegExp Constructor
let regEx4 = /love/gi // awesome mannnnnn <<<<>>>> let regEx = new RegExp("love", "gi");
//The above regular expression is the same as the one which we created with RegExp constructor

//RegExp object methods
//Let us see some of RegExp methods
//Testing for a match
//test(): Tests for a match in a string. It returns true or false.
const str = "I love JavaScript"
const pattern2 = /love/
const result = pattern2.test(str)
console.log(result)

const result2 = str.match(pattern)
console.log(result2)

//replace()

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

const matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced) //  pytton and Python will change with JavaScript

const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const matches = txt2.replace(/%/g, '')
console.log(matches)

//
//Square Bracket
//Let's use square bracket to include lower and upper case
const pattern3 = '[Aa]pple' // this square bracket means either A or a
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches2 = txt3.match(pattern3)
console.log(matches2)

const pattern4 = /[Aa]pple/g // this square bracket means either A or a
const txt4 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches3 = txt4.match(pattern4)
console.log(matches3)


//Escape character (\) in RegExp
const pattern5 = /\d/g  // d is a special character which means digits
const txt5 = 'This regular expression example was made in January 12,  2020.'
const matches5 = txt5. match(pattern5)
console.log(matches5)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

//True
const pattern6 = /\d+/g  // d is a special character which means digits
const txt6 = 'This regular expression example was made in January 12,  2020.'
const matches6 = txt6. match(pattern6)
console.log(matches6)  // ["12", "2020"], this is not what we want
































































