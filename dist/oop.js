"use strict";
/* OOP - Class & Object */
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposet(amount) {
        this.balance = this.balance + amount;
    }
}
let moamenAccount = new Account(1, "Moamen Walid", 10);
let mazenAccount = new Account(2, "Mazen Walid", 20);
console.log(moamenAccount);
moamenAccount.deposet(20);
console.log(moamenAccount);
/* OOP - Class & Object */ 
