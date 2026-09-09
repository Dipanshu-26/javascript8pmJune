//destructuring  (unpacking values from arrays or objects into variables)
// Destructuring is a JavaScript feature that allows you to extract values from 
// arrays or objects and store them into variables in a clean and readable way.
// Instead of accessing values one by one, destructuring lets you do it in a single line.

let names = ['dipanshu','nitin','neel','tanish']

let a= names[0]
let b= names[1]
let c= names[2]

//destructuring  (unpacking values from arrays or objects into variables)
let [a1,a2,a3] = names
console.log(a1)
console.log(a2)
console.log(a3)

let info ={
    firstName : "neel2",
    lastName : "chawde2"
}

// let {firstName,lastName} = info
// console.log(firstName)

// let {firstName : fn , lastName:ln } = info
// console.log(fn)

//-------------------------------------------------------------------------------------------

let info2 = {
    firstName : "akay",
    lastName : "masalkar",
    age : 2,
    parents : {
        mother:"shivani",
        father : "aditya"
    }
}

let {firstName : fn, lastName : ln , parents : {mother:mo,father: ft}} = info2
console.log(fn)
console.log(mo)
console.log(ft)

