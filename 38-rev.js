//call , bind ,apply 
let adi ={
    fname:"aditya",
    lname:"masalkar",
    display:function(){
        console.log(`${this.fname} ${this.lname}`)
    }
}

let dip={
    fname:"dipanshu",
    lname:"chawde"
}

adi.display()

dip.display = adi.display
dip.display()
//-------------------------------------------------------------------------------


let dip2={
    fname:"dipanshu",
    lname:"chawde",
    display:function(){
        console.log(`${this.fname} ${this.lname}`)
    },
    displayInfo:function(city,country){
        console.log(`${this.fname} ${this.lname} == ${city} ${country}`)
    }
}

let adi2 ={
    fname:"aditya",
    
    :"masalkar"
}

let ru={
    fname:"rucha",
    lname:"gaware"
}

//method borrow
adi2.display=dip2.display
adi2.display()

//call
dip2.display.call(adi2)
dip2.displayInfo.call(adi2,"pune","india")


dip2.display.call(ru)
dip2.displayInfo.call(ru,"mumbai","bharat")


dip2.display()
dip2.displayInfo("nagpur","india")

//-----------------------------------------------------------------------------------------

//apply
dip2.displayInfo.apply(ru,["pune","bharat"])

//----------------------------------------------------------------------------------------

let ruBind = dip2.display.bind(ru)

let adiBind=dip2.displayInfo.bind(adi2,"pune","india")

ruBind()
adiBind()