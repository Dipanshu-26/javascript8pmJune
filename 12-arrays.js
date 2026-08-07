let names="dipanshu"
let names2="neel"
let names3="tanish"

//arrays : used to store multiple values in single variable 
//            0         1        2       3
let nms = ["dipanshu","neel","tanish","nitin"]

console.log(nms)
console.log(nms[0])
console.log(nms[1])
console.log(nms[3])

//console.log(nms[5])

//-----------------------------------------------------------------
//CRUD 
//            0           1     2   3      4    5
let info = ["dipanshu","chawde",23,true, 23.6,[11,22]]    //total =6 last index =5

console.log(info[5])
console.log(info[3])

console.log(typeof(info))

console.log(info.length)

//object 
//methods 
//properties 

console.log(info)

//update 
info[0]="neel"
console.log(info)

info[5]=100
console.log(info)

//loops
//         0  1  2  3  4  5  6 
let nums=[11,22,33,44,55,66,77]        // length == 7, last element of array =length-1 
for(let i=0;i<=6;i++){
    console.log(nums[i])     //nums[0],nums[1].....nums[6]
}
console.log("-----------")
console.log(nums.length)
//----------------------------------------------
//      i=0 ; i<7
for(let i=0; i<nums.length;i++){   //i=0,1,2....i=6 ,7
    console.log(nums[i])          //nums[0],nums[1],nums[2]......nums[6]
}

console.log("-----------")
//-------------------------------------------
let x=0
while(x<nums.length){
    console.log(nums[x])
    x++
}

console.log("-----------")
//     0  1  2  3  4  5  6 
nums=[11,22,33,44,55,66,77]  
//reverse

for(let i=nums.length-1; i>=0;i--){       //i=i-1
    console.log(nums[i])
}

console.log("-----------")

let y=nums.length-1
while(y>=0){
    console.log(nums[y])
    y--
}