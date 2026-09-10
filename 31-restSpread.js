//rest, spread operator

//spread operator (VERY IMPORTANT)
//“Spread operator is used to spread the elements of an array or object into individual elements.”

let a=[1,2,3,4]
let b=[5,6,7,8,9]

let c=[a,b]
//c=[[1,2,3,4],[5,6,7,8,9]]
console.log(c)

let d =[...a,...b]
console.log(d)

//-----------------------------------------------------------------------------------------------------------

let info3 = {
    name :"dipanshu",
    surname : "chawde",
    location : "pune",
    marks : 90
}

// let info4 = {
//     name1 :"neel",
//     surname1 : "ch",
//     location1 : "mumbai",
//     marks1 : 99
// }

let info4 = {
    name :"neel",
    surname : "ch",
    city : "mumbai",
    rollNo : 99
}

let allInfo = {...info3,...info4}
console.log(allInfo)
//---------------------------------------------
// Rest Operator (VERY IMPORTANT)
// “Rest operator is used to collect the remaining elements into an array.” 

let x=['abc','aaa',1,2,3,4,5,6,7]

let [a1,a2,...restArr]=x

console.log(a1)
console.log(restArr)

console.log(a2)

//-------------------------------------------------------------------------------------------

info3 = {
    id : 123,
    name :"dipanshu",
    surname : "chawde",
    location : "pune",
    marks : 90
}

let {id : q1, ...restInfo} = info3
console.log(q1)
console.log(restInfo)