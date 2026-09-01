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