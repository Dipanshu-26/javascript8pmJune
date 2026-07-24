//functions without parameter and without return type

//function definitatiom
function addition(){
    console.log(20+30)
}

addition()
addition()

//functions with parameter and without return type

function addition2(x,y){    //x, y parameters
    console.log(x+y)
}

//          x  y
addition2(100,200)     //100,200 arguments
addition2(500,500)

//functions with parameter and with return type
function addition3(x,y){
    return x+y
}

let res = addition3(300,400)
console.log(res)
//-------------------------------------------------------------

//==,!=,>,>=<,<=
//===,!==

//ip ==>ip   ==> op(true/false)
console.log(3==3)
console.log(3!=3)

console.log(3>=13)
console.log(3>3)
console.log(3>=3)      //> or ==
console.log(3>=2)

console.log(3<3)
console.log(3<=3)
console.log("----------------")
let x=10
let y="10"
console.log(x==y)       //checks only values

console.log(typeof(x))
console.log(typeof(y))

console.log(x===y)    //data type and values
console.log("----------------")
console.log(x!=y)
console.log(x!==y)

x=10
y=10
console.log(x==y) 
console.log(x===y) 
console.log(x!=y)
console.log(x!==y)