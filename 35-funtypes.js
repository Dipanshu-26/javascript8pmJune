//functions

//function declarations
greet()

function greet(){
    console.log("hello")
}

greet()


//hoisted 
//can call before definitation
//----------------------------------------------------------------------------------
//function expression
//not hoisted
//greet2()     //ReferenceError: Cannot access 'greet2' before initialization

let greet2=function(){
    console.log("hello2")
}

greet2()

//-----------------------------------------------------------------------------------

//arrow function
//not hoisted
//greet3()     //ReferenceError: Cannot access 'greet3' before initialization

let greet3= ()=>{
    console.log("hello3")
}

greet3()

//---------------------------------------------------------------------------------

let add = (a,b)=>a+b

let sub =(a,b)=>a-b

let mul =(a,b)=>a*b

let div =(a,b)=>a/b

let mod =(a,b)=>a%b

let md = mod(20,3)
console.log(md)


//---------------------------------------------------------------------------------------

//Anonymous Function
// setTimeout(function(){
//     console.log("Run")
// }, 2000)


//----------------------------------------------------------------------------------------------

//function as parameter

function calculator(fn,x,y){
    let ans =fn(x,y)
    return ans
}

let q1 = calculator(add,20,5)
console.log(q1)

q1 = calculator(sub,20,5)
console.log(q1)

//------------------------------------------------------------------------------------------------

//function as return type

function substraction(){
    return (x,y)=>x-y
}

let q2=substraction()
let a1 = q2(11,22)
console.log(a1)

//let var const 