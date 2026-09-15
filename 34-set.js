let arr=[1,2,3,4,5,6,1,2,3,4,5,1,2,3,4]

//set stors unique values

//CRUD
let s1=new Set()
console.log(s1)

s1.add(1)
s1.add(2)
s1.add(3)
console.log(s1)

s1.add(2)
s1.add(3)
s1.add(4)
console.log(s1)

let s2=new Set([1,2,3,4,5,1,2,3,4,5,6,7,8,1])
console.log(s2)

//set methods
//add()
//delete()
//has()
//clear()
//size

console.log(s2.size)

console.log(s2.has(4))
console.log(s2.has(9))

// let s3=new Set([9,8,7,6,2,4,7,1,0])

// console.log(s3)

s2.add([2,4])
console.log(s2)

console.log(s2.has([2,4]))       // stored with reference

let a=[3,4]
s2.add(a)
console.log(s2)

console.log(s2.has(a))

//delete()

s2.delete(1)
console.log(s2)

//loops
let s4=new Set(["dipanshu","rucha","aditya"])
for(let el of s4){
    console.log(el)
}

s4.forEach(function(el){
    console.log(el)
})

for(let[a,b,c] of s4){        //"dipanshu"    a=d  , b=i c=p
    console.log(a,b,c)
}

let arr2=[11,22,33,44,55,11,66,22,44,88]

let uq_set=new Set(arr2)
console.log(uq_set)

arr2= new Array(uq_set)
console.log(arr2)

arr2=[...uq_set]
console.log(arr2)

let arr3=[...uq_set]
console.log(arr2)
//-----------------------------------------------------------------------------
let ar1=[1,2,3,4,5,6,7,1,2,3,4]
console.log(ar1)

let st1=new Set(ar1)
console.log(st1)

let ar2=[...st1]
console.log(ar2)

let ar3=Array.from(st1)
console.log(ar3)

console.log("-----------------------")
let x=Array.from(new Set(ar1))
console.log(Array.from(new Set(ar1)))

console.log(ar1)