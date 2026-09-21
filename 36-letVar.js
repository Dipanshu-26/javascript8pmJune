// Difference between var, let, and const in JavaScript

// 1. var --- Function scoped, Can be re-declared, Can be re-assigned,
// Causes unexpected behavior → not recommended

// 2. let  --- Block scoped, Cannot be re-declared in the same scope, Can be re-assigned
// Preferred for variables whose value changes

// 3. const --- Block scoped, Cannot be re-declared, Cannot be re-assigned
// Must be initialized at declaration, Used for constant values

let a=10
console.log(a)
a=30
console.log(a)

//let a= 40    //SyntaxError: Identifier 'a' has already been declared

const c=40
console.log(c)

//c=100   //TypeError: Assignment to constant variable.

//const x   //SyntaxError: Missing initializer in const declaration

//----------------------------------------------------------------------------------------------
console.log("-----------------------------")
//var 

var v1=100
console.log(v1)

v1=200
console.log(v1)

var v1=500

console.log(v1)
console.log(v1)

//---------------------------------------------------------------------------------------------
console.log("-----------------------------")

let b1=100
{   
    let b1 = 500
    let b2=99
    console.log(b1)
    console.log(b2)
}
console.log(b1)
//console.log(b2)     //ReferenceError: b2 is not defined

//---------------------------------------------------------------------------------------------
console.log("-----------------------------")

function scopeTest(){
    if(true){
        let l1=11
        var l2=22
        console.log(l1)
        console.log(l2)
    }
    //console.log(l1)   //ReferenceError: l1 is not defined
    console.log(l2)
}

scopeTest()

//---------------------------------------------------------------------------------------------
console.log("-----------------------------")

// In JavaScript, var, let, and const are all hoisted, but they behave differently.

// | Keyword | Hoisted? | Initialized during hoisting? | Can access before declaration? | Result           |
// | ------- | -------- | ---------------------------- | ------------------------------ | ---------------- |
// | `var`   | ✅ Yes    | ✅ Yes, with `undefined`      | ✅ Yes                          | `undefined`      |
// | `let`   | ✅ Yes    | ❌ No                         | ❌ No                           | `ReferenceError` |
// | `const` | ✅ Yes    | ❌ No                         | ❌ No                           | `ReferenceError` |

// 1. var Hoisting
////The declaration is hoisted, but the assignment is not.
console.log(y1)
var y1=200
console.log(y1)


// var y1 
// console.log(y1)
// y1=200
// console.log(y1)

//--------------------------------------------------------------------------------------------------------------------

// 2. let Hoisting
//let and const is hoisted but remains in the TDZ Temporal Dead Zone until its declaration is reached.
//console.log(y)    //ReferenceError: Cannot access 'y' before initialization

//console.log(y2)  //ReferenceError: Cannot access 'y2' before initialization
let y2=44
console.log(y2)


let y3
console.log(y3)
y3=77
console.log(y3)