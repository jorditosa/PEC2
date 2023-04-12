class Expense {
    constructor( {id, text, amount}) {
      this.id = id || this.uuid();
      this.text = text;
      this.amount = +amount;
    }

    uuid() {
        return new Date().getTime();
        }    
  }
  
  class Balance {
    constructor(balance) {
      this.balance = balance;
    }

    updateBalance(expenses) {
        let balance = 0;
        expenses.forEach(expense => {
            balance += expense.amount;
        });
        return balance;
    }
  }