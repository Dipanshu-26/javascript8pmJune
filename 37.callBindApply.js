//call, apply, and bind is to show that they are used to control the value of this when executing a function.

let adi={
    fname:"Aditya",
    lname:"Masalkar",
    display:function(){
        console.log(this.fname + " "+this.lname)
    }
}

let dip ={
    fname:"Dipanshu",
    lname:"Chawde"
}

adi.display()

//1. Method borrowing---------------------------------

dip.display = adi.display
dip.display()
console.log(adi.display)

//2. call() Method ----------------------------------------------------
//call() executes the function immediately and allows us to set this.

let dip1 ={
    fname:"Dipanshu",
    lname:"Chawde",
    display:function(){
        console.log(this.fname + " "+this.lname)
    },
    displayInfo:function(city,country){
        console.log(this.fname + " "+this.lname + " "+city+ " "+ country)
    }
}

let adi1={
    fname:"Aditya",
    lname:"Masalkar"
}

let ru = {
    fname:"Rucha",
    lname:"Gaware",
}

ru.display=dip1.display
ru.display()

//call 
dip1.display.call(ru)
dip1.display.call(adi1)

dip1.displayInfo.call(ru,"pune","india")
dip1.displayInfo.call(adi1,"munbai","india")

//apply

dip1.displayInfo.call(adi1,"mumbai","india")
dip1.displayInfo.apply(ru,["pune","india"])

console.log("-------------------------------------")
//bind()
//bind() does not execute immediately. It returns a new function with fixed this.

let ruBind = dip1.display.bind(ru)

let adiBind= dip1.display.bind(adi1)

ruBind()
adiBind()

let adiBind2=dip1.displayInfo.bind(adi1,"mumbai","india")
adiBind2()

// bind() → creates new function
// call() → executes immediately
// apply() → executes immediately