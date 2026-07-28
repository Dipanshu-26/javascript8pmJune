//if else 

//marks >90 A , marks > 70 B , marks > 60 C

let marks = 57
if(marks > 90 ){
    console.log("A")
} 
if(marks>70){
    console.log("B")
}
if(marks>60){
    console.log("C")
}

//---------------------------------------------------------
marks = 97
if(marks > 90 ){
    console.log("A")
} 
else if(marks>70){
    console.log("B")
}
else if(marks>60){
    console.log("C")
}
else{
    console.log("please tyy again")
}
//---------------------------------------------------------------

let x=100
let y=100
if(x>y){
    console.log("x is greater")
}
else {
    console.log("y is greater")
}

//-----------------------------------------------------------------
if(x>y){
    console.log("x is greater")
}
else if(y>x){
     console.log("y is greater")
}
else {
    console.log("both are equal")
}
//------------------------------------------------------------------

let a=1000
let b=100
let c=1000

if(a>b && a>c){
    console.log("a is greater")
}
else if(b>a && b>c){
    console.log("b is greater")
}
else{
    console.log("c is greater")
}
//-----------------------------------------------------------------
if(a>b && a>c){
    console.log("a is greater")
}
else if(b>a && b>c){
    console.log("b is greater")
}
else if(c>a && c>b){
    console.log("c is greater")
}
else{
    console.log("either greater two or all are equal")
}