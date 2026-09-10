let x=10
let y="dipanshu"
let z=[1,2,3,4,5,6]
let obj={
    name : "dipanshu",
    surname : "chawde",
    1 : 123
}

console.log(typeof(y))
console.log(typeof(z))
console.log(typeof(obj))


//map 
// In JavaScript, Map is a built-in collection object that stores key-value pairs.
// Unlike a normal object ({}), a Map:
//     - allows any datatype as a key
//     - maintains insertion order
//     - provides useful methods like set(), get(), has(), and delete()

//map 
//key , value 

let map1=new Map([
    ["fn","dipanshu"],
    ["ln","chawde"],
    [1,"javascript"],
    [true ,"hasVechile"],
    ["dipanshu","firstname"],
    [[1,2,3],"abc"]
])

console.log(map1)
console.log(map1.size)

//CRUD

let map2=new Map()

map2.set("id",123)
map2.set("name","dipanshu")
map2.set("class","javascript")
map2.set({city:"pune"},"location")
console.log(map2)

map2.set("id",456)
console.log(map2)

//------------------------------------------------------------------------------------

let q1=[1,2]
let q2=[1,2]

let q3=10
let q4=10
console.log(q3==q4)

console.log(q1==q2)

console.log(JSON.stringify(x)==JSON.stringify(y))
//------------------------------------------------------------------------------------------