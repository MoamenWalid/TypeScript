/* OOP - Class & Object */
class Account {
  id: number;
  owner: string;
  balance: number;
  
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposet(amount: number) {
    this.balance = this.balance + amount;
  }
}

let moamenAccount = new Account(1, "Moamen Walid", 10);
let mazenAccount = new Account(2, "Mazen Walid", 20);
/* OOP - Class & Object */