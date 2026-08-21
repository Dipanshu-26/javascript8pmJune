let arr=["dipanshu","chawde","true",23,36,[11,22,44]]
console.log(arr)
console.log(arr[0])

//objects 
//key value pair 

//CRUD

//Create
let info={
    firstName : "dipanshu",
    lastName : "chawde",
    age : 36,
    rollNo : 23,
    isPass : true,
    marks : [11,22,33]
} 
console.log(info)
//retrive
//dot notataion 
console.log(info.firstName)
console.log(info.lastName)
console.log(info.marks)
console.log(info.marks[2])

//bracket notation
console.log(info["firstName"])
console.log(info["lastName"])
console.log(info["marks"])
console.log(info["marks"][0])

for(let k in info){
    // console.log(k)
    // console.log(info[k])
    console.log(`${k} : ${info[k]}`)
}

let car ={
    color : "red",
    model : "xuv",
    Number : 1234,
    color : "silver"
}
console.log(car)

//updates

car.Number=5678
console.log(car)

car["model"]="sedan"
console.log(car)

car.brand="audi"
console.log(car)

//----------------------------------------------------------------------------------

console.log(Object.keys(info))
console.log(Object.values(info))
console.log(Object.entries(info))

let q1 = info.hasOwnProperty('isPass')
console.log(q1)

q1 = info.hasOwnProperty('xyz')
console.log(q1)