class Person{
    constructor(fn,ln){
        this.fname=fn
        this.lname=ln
    }
    displayName(){
        console.log(this.fname +" "+this.lname)
    }
}

let a1=new Person("dipanshu","chawde")
a1.displayName()

let arr=[1,2,3,4]
arr.pop()
arr.push(123)
console.log(arr)

//---------------------------------------------------------------------------------------
class Person2{
    setFirstName(fn){
        this.fname=fn
    }
    setLastName(ln){
        this.lname=ln
    }
    getFirstName(){
        return this.fname
    }
    getLastName(){
        return this.lname
    }

}

let dip=new Person2()
dip.setFirstName("neel")
let nm = dip.getFirstName()
console.log(nm)

dip.setLastName("chawde")
let ln = dip.getLastName()
console.log(ln)

//---------------------------------------------------------------------------------------------
//get set keywords
class Person3{
    set firstName(fn){
        this.fname=fn
    }
    set lastName(ln){
        this.lname=ln
    }
    get nameF(){
        return this.fname
    }
    get nameL(){
        return this.lname
    }

}

let t=new Person3()
t.firstName="tanish"
t.lastName="chawde"
console.log(t.nameF)
console.log(t.nameL)
//----------------------------------------------------------------------------------

class student{
    set fname(fn){
        this.firstName = fn
    }
    get namee(){
        return this.firstName
    }

    set lname(ln){
        this.lastName=ln
    }

    get surname(){
        return this.lastName
    }
}

let ak=new student()
ak.fname="akay"
ak.lname="masalkar"

console.log(ak.namee)
console.log(ak.surname)
//---------------------------------------------------------------------------------------------------------------
