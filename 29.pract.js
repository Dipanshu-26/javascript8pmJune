let x="nitin"
let revStr=""

for(let i=0;i<x.length;i++){
    revStr=x[i]+revStr
}

console.log(revStr)
// H
// e+H ==> eH 
// l + eH ==> leH

//nitin

if(revStr==x){
    console.log("is palandrome")
}
else{
    console.log("not palandrome")
}

//----------------------------------------------------------------------------------------
x="dipanshu"
console.log(x.split("").reverse().join(""))
//----------------------------------------------------------------------------------------

let a="dipanshu chawde"
let vovel=0
for(let x=0;x<a.length;x++){
    if(a[x]=='a' || a[x]=='e' || a[x]=='i' || a[x]=='o' || a[x]=='u' || a[x]=='A' || a[x]=='E' || a[x]=='I' || a[x]=='O' || a[x]=='U'){
        vovel++
    }
}
console.log(vovel)

//-------------------------------------------------------------------------------------------------------

a="dipanshu chawde"
vovel=0
let v="aeiouAEIOU"
for(let x=0;x<a.length;x++){
    if(v.includes(a[x])){
        vovel++
    }
}
console.log(vovel)
//--------------------------------------------------------------------------------------------------------------

// Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
// Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than 5.
// Write a function to find the maximum number in an array of numbers.
// Write a function to count the number of vowels (a, e, i, o, u) in a given string.
// Write a function to check if a given string is a palindrome (reads the same backward as forward).
// Write a function to capitalize the first letter of each word in a given sentence.
// Write a function to reversethe string in a given sentence
// Write a function to reverse words in a given sentence.
// program to delete duplicate charactor from string
// Write a function to capitalize the first letter of each word in a given sentence.
// sentance = "my name is dipanshu"

// 5. Fibonacci Series:
//  Generate the first n numbers in the Fibonacci sequence.

//--------------------------------------------------------------------------------------------------------

let nums =[22,34,56,67,89,12,13,35,98,65,43]

function sumEvenNo(arr){
    let sum =0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum=sum+arr[i]
        }
    }
    return sum
}

let q1 = sumEvenNo(nums)
console.log(q1)

//-----------------------------------------------------------------------------------------------------------

//find max number in array 