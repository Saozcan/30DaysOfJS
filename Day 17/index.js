console.log("Hello go")

localStorage.setItem("Samim", "Ozcan", 25, "Turkiye", "İstanbul")
console.log(localStorage.getItem("Samim"))



const student = {
    firstName: "Muhammed",
    lastName: "Ozcan",
    age: 24,
    skills: [
        "Python",
        "PHP",
        "Java",
        "Go",
        "JS",
        "C",
        "C++",
        "Sevmek"
    ],
    country: "Hollanda"
}

localStorage.setItem("Maho", JSON.stringify(student))
console.log(JSON.parse(localStorage.getItem("Maho")))














































































