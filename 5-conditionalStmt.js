//conditional statements 
//one input multiple output 

//num 1-5 ==> 5 % , 6 to 10 ==> 10% , above 10 ==>20%

let num= -17 
if(num>=1 && num <=5){
    console.log("5% discount")
}
if(num>=6 && num<=10){
    console.log("10% discount")
}
if(num>10){
    console.log("20% discount")
}
//--------------------------------------------

num= -15
if(num>=1 && num <=5){
    console.log("5% discount")
}
else if(num>=6 && num<=10){
    console.log("10% discount")
}
else if(num>10){
    console.log("20% discount")
}
else {
    console.log("enter proper number")
}