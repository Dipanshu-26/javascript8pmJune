
// reverse(),join(arg),concat(arg), flat()
// includes(arg), indexOf(arg-el),at(arg-index), 

let arr=[11,22,33,44,55,66]

console.log(arr.reverse())

let arr2 = ["dipanshu","nitin","chawde"]

let q1 = arr2.join("_")
console.log(q1)

console.log(arr.join("-"))

let x=[1,2,3,4]
let y=['a','b','c','d']
let z= x.concat(y)
console.log(x.concat(y))
console.log(y.concat(x))
console.log(z)

//     0      1
//  0 1 2   0 1 2
x=[[1,2,3],[4,5,6]]

console.log(x[0])
console.log(x[0][2])

console.log(x.flat())

//includes()

arr=[11,22,33,44,55,66]
console.log(arr.includes(66))
console.log(arr.includes(88))

//indexOf

console.log(arr.indexOf(66))
console.log(arr.indexOf(99))

//at
console.log(arr.at(0))
console.log(arr.at(4))
console.log(arr.at(9))

arr=[89,76,45,90,34,22,11,33]
console.log(arr.sort())

arr2=["dipanshu","neel","nitin","nitesh","neelay","deep","tanish"]
console.log(arr2.sort())

arr=[89,761,45,90,345,22,11,33,100,11,123]
console.log(arr.sort())  

// 11,100,11,123

// dipanshu
// deep