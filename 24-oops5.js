class WorldBank{
    loanInterestRate(){
        return 6
    }
    saveInterestRate(){
        return 4
    }
}

class SBI extends WorldBank{
    loanInterestRate(){
        return super.loanInterestRate() + 2
    }

    saveInterestRate(){
        return super.saveInterestRate() - 2 
    }
}

let sbi=new SBI()
let l = sbi.loanInterestRate()
let s = sbi.saveInterestRate()
console.log(l)
console.log(s)
//--------------------------------------------------------------------------

//duck typing
let dog = {
    sound(){
        console.log("bark")
    }
}

let cat ={
    sound(){
        console.log("mew")
    }
}

let human = {
    sound(){
        console.log("talk")
    }
}

function makeSound(animal){
    animal.sound()
}

makeSound(dog)
makeSound(cat)

//---------------------------------------------------------------------------

class Dog{
    talk(){
        console.log("bho bho")
    }
}

class Cat{
    talk(){
        console.log("mew mew")
    }
}

class Duck{
    talk(){
        console.log("quack quack")
    }
}


function call_talk(obj){
    obj.talk()
}

let dk = new Duck()
call_talk(dk)