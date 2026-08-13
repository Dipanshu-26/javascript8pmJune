//slice , splice, fill

// slice()
// syntax => slice(startIndex,EndIndex(not included))
// action => extracts a portion of the array from startIndex to before endIndex
// return => a new array (sliced elements)    


//              0        1         2        3          4         5
let city = ["pune","mumbai","banglore","chennai","kolkata","mysore"]
//              -6        -5      -4        -3         -2         -1

console.log(city.slice(0))
console.log(city.slice(1))

console.log(city.slice(1,5))
console.log(city.slice(1,3))

console.log(city.slice(4,1))

console.log(city.slice(-5,-1))
console.log(city.slice(-5,-2))

console.log(city.slice(-5,5))
console.log(city.slice(5,-5))

console.log("---------------------------------------------------------")
// splice()
// syntax => splice(startIndex, deleteCount, item1, item2, ...)
// action => removes elements from the array starting at startIndex and optionally inserts new elements
// return => array of deleted elements (original array gets updated)

//               0        1      2        3       4        5
let animals = ["tiger","lion","wolf",'camel',"rabbit","snake"]
// let q1 = animals.splice(2,2)
// console.log(animals)

// animals.splice(3,1)
// console.log(animals)

// animals.splice(2,2,123,456)
// console.log(animals)

// animals.splice(2,2,123,456,789)
// console.log(animals)

animals.splice(2,2,123)
console.log(animals)

// fill()
// syntax => fill(value, startIndex?, endIndex?)  // endIndex not included
// action => fills array elements with the given value from startIndex to before endIndex
// return => updates the existing array


//          0   1  2  3  4  5  6
let number=[11,12,13,14,15,16,17]

// number.fill('a',2,4)
// console.log(number)

number.fill('b',2,3)
console.log(number)