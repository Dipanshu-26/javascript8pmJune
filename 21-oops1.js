//oops concepts 
// “Let’s create two different people in a system: Student and Teacher.”
// “Inheritance allows one class to reuse properties and methods of another class.”
// Parent class → Student
// Child class → Teacher
//-----------------------------------------------------------------------------------

//Single Inheritance (Only Parent Has Constructor) 

// class Student {
//     constructor(fn, ln) {
//         this.fname = fn
//         this.lname = ln
//     }
//     displayName(){
//         console.log(this.fname+" "+this.lname)
//     }
// }

// class Teacher{
//     constructor(fn, ln,sal) {
//         this.fname = fn
//         this.lname = ln
//         this.salary=sal
//     }
//     displayName(){
//         console.log(this.fname+" "+this.lname)
//     }    
//     displaySalary(){
//         console.log(this.salary)
//     }
//}
//-------------------------------------------------------------------------
// parent class ==> student
// child class ===> teacher
//------------------------------------------------------------------------------
// “What code is duplicated here?”
// firstName, lastName, dob,displayName()
// “When code repeats, inheritance is needed.”
//---------------------------------------------------------------------------

class Student {
    constructor(fn, ln) {
        this.fname = fn
        this.lname = ln
    }
    displayName(){
        console.log(this.fname+" "+this.lname)
    }
}

class Teacher extends Student{
    constructor(fn, ln,sal) {
        super(fn,ln)
        this.salary=sal
    }
    displaySalary(){
        console.log(this.fname+ " "+this.salary)
    }
}

let th=new Teacher("dipanshu","chawde",100000)
let st=new Student("neel","chawde")

th.displayName()
th.displaySalary()

st.displayName()
//st.displaySalary()

//------------------------------------------------------------------------------------------

//“If child has no constructor, parent constructor is called automatically.”
//-----------------------------------------------------------------------------------

console.log("--------------------------------------")
// Parent AND Child Both Have Constructor (Most Important)
// “Now let’s see what happens when the child also wants extra data.”
//-----------------------------------------------------------------------------------------

class Student1{
    constructor(fn,ln,dob){
        this.fname=fn
        this.lname=ln
        this.dob=dob
    }
    displayName(){
        console.log(this.fname+" "+this.lname)
    }   

}

class Teacher1 extends Student1{
    salary=100000
    displaySalary(){
        console.log(this.fname+ " "+this.salary)
    }

}

let s1=new Student1("neel","chawde","01-10-2023")
let t1=new Teacher1("dip","chawde","10-10-2021")

s1.displayName()
t1.displayName()
t1.displaySalary()


// super() (VERY IMPORTANT)
// “super() is used to call the parent constructor.”

// Rules:
// super() must be called before this
// Without super(), JavaScript throws an error
// super() passes data to parent

//Child object can access both parent and child methods.


// Teacher constructor
//         ↓
//       super()
//         ↓
// Student constructor
