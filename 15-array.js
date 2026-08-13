let byear=[2016,2012,2000,1999,1985,1983]
let age=[]
for(let i=0;i<byear.length;i++){
    age.push(2026-byear[i])
}
console.log(age)

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

//--------------------------------------------------------------

let nums=[12,34,55,67,89,90,12,34,56]
let total = 0
for(let i=0;i<nums.length;i++){
    total=total+nums[i]
}

console.log(total)

//--------------------------------------------------------------
let names=["dipanshu","neel","tanish","rajasi"]

for(let i=0;i<names.length;i++){
    console.log(`Hi ${names[i]}, How are you?`)
}