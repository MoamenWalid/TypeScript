/**
 * Notes:
 * Access Modifiers: (public, private)
 */

/* OOP - Class & Object */
class Account {
  id: number;
  owner: string;
  private _balance: number;
  private _username?: string;
  private static _numOfAccounts: number = 0;
  
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
    Account._numOfAccounts++;
  }

  static get numOfAccounts(): number {
    return Account._numOfAccounts;
  }

  deposet(amount: number): void {
    if (amount <= 0) throw Error("Amount can't be less than one");
    this._balance = this._balance + amount;
  }

  get balance(): number {
    return this._balance;
  }

  get username(): string | undefined {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }
}

let acc1 = new Account(1, "Moamen Walid", 10);
let acc2 = new Account(2, "Mazen Walid", 20);
let acc3 = new Account(2, "Mazen Walid", 20);

console.log(Account.numOfAccounts);
/* OOP - Class & Object */