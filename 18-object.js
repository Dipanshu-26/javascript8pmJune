let students = [
    {
        firstName: "jaya",
        lastName: "kumari",
        age: 25,
        city: "nashik",
        skills: ["java", "python"],
        marks: 50
    },
    {
        firstName: "Vishal",
        lastName: "Raut",
        age: 30,
        city: "Pune",
        skills: ["js", "salesforce", "cypress"],
        marks: 100
    },
    {
        firstName: "Sathish",
        lastName: "kumar",
        age: 45,
        city: "nashik",
        skills: ["katlon", "selenium", "react", "python"],
        marks: 35
    },
    {
        firstName: "teja",
        lastName: "kulkarni",
        age: 23,
        city: "Sangamner",
        skills: ["katlon"],
        marks: 45
    },
    {
        firstName: "rama",
        lastName: "kant",
        age: 30,
        city: "nagpur",
        skills: ["python", 'javascript'],
        marks: 23
    }

]


// let arr=[1,'a',[1,2],{name : "dip"}]
// let arr2 = [{},{},{},{}]

console.log(students[0])
console.log(students[1])

console.log(students[0].firstName)
console.log(students[1].firstName)

console.log(students[4].skills)

console.log(students[4].skills[0])

//get addition of marks of each students 

//reduce 
let sum=students.reduce(function(acc,el){
    return acc+el.marks
},0)

console.log(sum)


// {
//         firstName: "jaya",
//         lastName: "kumari",
//         age: 25,
//         city: "nashik",
//         skills: ["java", "python"],
//         marks: 50
//     },

//find students having marks > 35

let passS= students.filter(function(el){
    return el.marks>35
})

console.log(passS)

let failS= students.filter(function(el){
    return el.marks<=35
})

console.log(failS)

//----------------------------------------------------------------------------------

students.filter(function(el){
    return el.marks<=35
}).forEach(function(el){
    el.marks=el.marks+10             //a=a+10
    if(el.marks<=35){
        console.log(el.firstName)
    }
})

//console.log(students)