class Expense {
    constructor(text, amount) {
        this.text = text,
        this.amount = amount,
        this.id = this.createId()
    }

    createId() {
        return Math.random(new Date().getTime()) + 1;
    }
}

class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

  addExpense(text, amount) {
    const expense = new Expense(text, amount);
    this.expenses = [...this.expenses, expense];
  }

  getExpense(index) {
    return this.expenses[index];
  }

  removeExpense(index) {
    this.expenses.splice(index, 1);
  }
}
