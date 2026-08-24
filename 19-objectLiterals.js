let dip = {
    fname:"dipanshu",
    lname:"chawde",
    displayName:function(){
        console.log(this.fname + " " + this.lname)
    }
}

console.log(dip.fname)
dip.displayName()
console.log(dip.displayName())

let adi = {
    fname:"aditya",
    lname:"masalkar",
    displayName:function(){
        console.log(this.fname + " " + this.lname)
    }
}

console.log(adi.fname)
adi.displayName()

//50 students

//oops concepts

//class 

class Person {
    fname = undefined
    lname = undefined
    displayName(){
        console.log(this.fname + " "+ this.lname)
    }
}

let dip1 =new Person()
dip1.fname="dipanshu1"
dip1.lname="chawde1"

let adi1=new Person()
adi1.fname="aditya1"
adi1.lname="masalkar1"

adi1.displayName()
dip1.displayName()

//--------------------------------------------------------------------------------------------------

class Car{
    model = undefined
    num =undefined
    displayInfo(){
        console.log(this.model + " "+this.num)
    }
}

let audi=new Car()
audi.model="A7"
audi.num=1234
audi.displayInfo()
//---------------------------------------------------------------------------------

//constructor

class StudentsInfo{
    constructor(fn,ln){
        this.fname = fn
        this.lname=ln
    }
    displayInfo(){
        console.log(`info of student = ${this.fname} ${this.lname}`)
    }
}

let d1=new StudentsInfo("neel","chawde")
d1.displayInfo()



// A class is a blueprint
// Objects are created from this blueprint
// Method is written once, reused everywhere

// “Methods in classes do NOT use the function keyword.”



// new → creates a new object
// Each object gets its own copy of data
// Methods are shared
// Why Output is undefined : “Class defines structure, not values.”


// ----------------------------------------------------------------
// PART 4: Constructor (Professional Way)
// “What if we want values at the time of object creation?”


// constructor() runs automatically
// Called when new keyword is used
// Used to initialize values
//“Constructor = automatic setup function.”


// Object Literal (short note)
// An object literal is a simple way to create an object using key–value pairs.
// Functions inside an object are called methods.
// `this` refers to the current object.

// PART 1: Object Literal (Problem Introduction)
// “Before classes, JavaScript developers used object literals to group data and behavior.”