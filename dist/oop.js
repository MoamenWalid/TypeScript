"use strict";
/**
 * Notes:
 * Access Modifiers: (public, private)
 */
/* OOP - Class & Object */
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
        Account._numOfAccounts++;
    }
    static get numOfAccounts() {
        return Account._numOfAccounts;
    }
    deposet(amount) {
        if (amount <= 0)
            throw Error("Amount can't be less than one");
        this._balance = this._balance + amount;
    }
    get balance() {
        return this._balance;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
}
Account._numOfAccounts = 0;
let acc1 = new Account(1, "Moamen Walid", 10);
let acc2 = new Account(2, "Mazen Walid", 20);
let acc3 = new Account(2, "Mazen Walid", 20);
console.log(Account.numOfAccounts);
/* OOP - Class & Object */ 
