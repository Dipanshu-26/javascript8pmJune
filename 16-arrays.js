//map 
let byear=[2000,2023,20,2025,1999,1988,1976]
let age = byear.map(function(el){
    return 2026-el
})
console.log(age)

//-----------------------------------------------------------
let marks=[99,98,45,34,22,12,36,78,90,67]
let pMarks=marks.filter(function(el){
    return el>=35
})
console.log(pMarks)
//-------------------------------------------------------------

let num=[99,98,45,34,22,12,36,78,90,67]
let total = num.reduce(function(acc,el){
        return acc+el
},0)

console.log(total)
//---------------------------------------------------------------
let city=['pune','mumbai','delhi','banglore']
city.forEach(function(el){
    console.log(`Welcome to ${el}!!!`)
})
//--------------------------------------------------------------
//find,findIndex, some , every

// some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false

num=[99,98,45,34,22,12,36,78,90,67]

let q1 = num.some(function(el,idx,arr){
    return el>30
})
console.log(q1)

q1 = num.some(function(el,idx,arr){
    return el>100
})
console.log(q1)
//--------------------------------------------------------------------

// every()
// every(function(el, index, arr)
// action => checks if all elements satisfy the condition
// return => true if all elements match, otherwise false

num=[99,98,45,34,22,12,36,78,90,67]

let q2=num.every(function(el,idx,arr){
    return el>90
})
console.log(q2)

q2=num.every(function(el,idx,arr){
    return el>10
})
console.log(q2)

//---------------------------------------------------------------

// find()
// find(function(el, index, arr)
// action => finds the first element that satisfies the condition
// return => element (if not found, returns undefined)
num=[99,98,45,34,22,12,36,78,90,67]

let q3 =num.find(function(el,idx,arr){
    return el < 30
})
console.log(q3)

q3 =num.find(function(el,idx,arr){
    return el < 10
})
console.log(q3)


// findIndex()
// findIndex(function(el, index, arr)
// action => finds the index of the first element that satisfies the condition
// return => index (if not found, returns -1)

num=[99,98,45,34,22,12,36,78,90,67]

let q4 = num.findIndex(function(el,idx,arr){
    return el<30
})

console.log(q4)

q4 = num.findIndex(function(el,idx,arr){
    return el<10
})

console.log(q4)