//Multilevel Inheritance : Multilevel inheritance means a class is derived from another derived class.
//GrandFather → Father → Daughter

class GrandFather{
    constructor(fn, ln) {
        this.fname = fn
        this.lname = ln
    }
    displayName(){
        console.log(this.fname+" "+this.lname)
    }   
}


class Father extends GrandFather{
    constructor(fn, ln, ffn){
        super(fn, ln)
        this.fatherName = ffn
    }
    displayFatherName(){
        console.log(this.fatherName)
    }
}


class Son extends Father{
    constructor(fn,ln,ffn,sfn){
        super(fn,ln,ffn)
        this.sonName=sfn
    }
    displaySonName(){
        console.log(this.sonName +" "+this.fatherName +" "+this.lname)
    }
}



// const grandFather = new GrandFather("John", "Doe")
// grandFather.displayName()

// const father = new Father("Jane", "Doe", "John Doe")
// father.displayName()
// father.displayFatherName()

let sn=new Son("gopalrao","masalkar","niranjan","aditya")
sn.displaySonName()
sn.displayFatherName()
sn.displayName()

//Hierarchical Inheritance : Hierarchical inheritance means multiple child classes inherit from the same parent.
//daoughter and son can access fathers properties and methods

class Mother{
    constructor(fn,ln){
        this.fname=fn
        this.lname=ln
    }
    displayName(){
        console.log("mother name ="+this.fname + " "+this.lname)
    }
}

class Daughter extends Mother{
    constructor(fn, ln,dn){
        super(fn,ln)
        this.dname=dn
    }
    displayDName(){
        console.log("daughter name ="+this.dname + " "+this.lname)
    }
}

class Son2 extends Mother{
    constructor(fn, ln,sn){
        super(fn,ln)
        this.sname=sn
    }
    displaySonName(){
        console.log("son name ="+this.sname + " "+this.lname)
    }
}

let dt=new Daughter("dipti","masalkar","rucha")
let sn1=new Son2("dipanshu","chawde","tanish")

dt.displayDName()
dt.displayName()

sn1.displaySonName()
sn1.displayName()