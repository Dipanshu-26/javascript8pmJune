// map(),filter(),reduce(),forEach()
let byear=[2016,2012,2000,1999,1985,1983]
let age=[]
for(let i=0;i<byear.length;i++){
    age.push(2026-byear[i])
}
console.log(age)

//map
// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

let age2=byear.map(function(el,index,arr){
    return 2026-el         //2026-2016, 2026-2012......
})
console.log(age2)

//---------------------------------------------------------------

let marks = [99,89,23,11,45,33,35,78,45,90,79,66]
let passM=[]
for(let i=0;i<marks.length;i++){
    if(marks[i]>=35){
        passM.push(marks[i])
    }
}
console.log(passM)

let failM=[]
for(let i=0;i<marks.length;i++){
    if(marks[i]<35){
        failM.push(marks[i])
    }
}
console.log(failM)

//filter
// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements

let passM2 = marks.filter(function(el,index,arr){
    return el>=35
})
console.log(passM2)

let failM2 = marks.filter(function(el,index,arr){
    return el<35
})
console.log(failM2)


// //--------------------------------------------------------------

let nums=[12,34,55,67,89,90,12,34,56]
let total = 0
for(let i=0;i<nums.length;i++){
    total=total+nums[i]              //0+12 ,12+34 , 46+55 
}

console.log(total)

//reduce
// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)
let sum = nums.reduce(function(acc, el, index,arr){
    return acc+el
},0)
console.log(sum)


//--------------------------------------------------------------
let names=["dipanshu","neel","tanish","rajasi"]

for(let i=0;i<names.length;i++){
    console.log(`Hi ${names[i]}, How are you?`)
}

//forEach
// forEach(function(el, index, arr))
// action => performs an operation on each element of the array
// return => undefined (does NOT create new array)

names.forEach(function(el,index,arr){
    console.log(`Hi ${el}, How are you?`)
})

// map(),filter(),reduce(),forEach()
// find(),findIndex(),some(),every()