// OOPs Concepts in JavaScript

// JavaScript supports OOP using:
//     class
//     constructor
//     extends
//     super
//     getters/setters

// The 4 main OOPs concepts are:
//     Encapsulation
//     Abstraction
//     Inheritance
//     Polymorphism
//     Static Methods

// 1. Encapsulation — Protecting and Controlling Data
//---------------------------------------------------------
// Encapsulation means keeping data and the methods that operate on that data together inside a class, 
// while controlling direct access to internal data.

// In JavaScript, # creates a private field.


class BankAccount{
    #balance = 10000 // private property
    deposit(amt){
        this.#balance += amt          
    }
    getBalance(){
        return this.#balance
    }
    withdraw(amt){
        this.#balance -= amt
    }

}

let ba = new BankAccount()
ba.deposit(2000)
console.log(ba.getBalance())
ba.withdraw(5000)
console.log(ba.getBalance())
//---------------------------------------------------------------------------------------------------------


// 3. Inheritance — Reusing Parent Class Features
// Inheritance allows one class to inherit properties and methods from another class.
// In JavaScript, we use extends.

// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// const dog = new Dog();

// dog.eat();   // Inherited from Animal
// dog.bark();  // Dog's own method

// A Manager is an Employee, so the Manager can inherit common Employee functionality.
// Remember: Inheritance = Reuse functionality from a parent class
//----------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------

// 4. Polymorphism — Same Method, Different Behavior
// Polymorphism means the same method name can behave differently depending on the object.
// A common example is method overriding.

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

//Remember: Polymorphism = Same method/interface + Different behavior
//--------------------------------------------------------------------------------------------
// Encapsulation: Using private fields and methods to hide data.
// Abstraction: Exposing methods without implementation details.
// Inheritance: Using extends to reuse class behavior.
// Polymorphism: Same method name behaving differently at runtime.

//--------------------------------------------------------------------------------------------------
//Static method
// A static method belongs to the class and is called using the class name, 
// while a non-static method belongs to an instance (object) and requires an object to call it.

class Employee{
    showName(){
        console.log("dipanshu")
    }

    static showCompany(){
        console.log("xyz tech")
    }

}

let e1=new Employee()
e1.showName()

//e1.showCompany()

Employee.showCompany()