class ExpenseServices {
    constructor() {
      this.expenses = (JSON.parse(localStorage.getItem('expenses')) || []).map(expense => {
        new Expense(expense);
      });
    }

    addExpense(text, amount) {
        this.expenses.push(new Expense(text, amount));
    }

  
}