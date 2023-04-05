class ExpenseServices {
    constructor() {
      this.expenses = (JSON.parse(localStorage.getItem('expenses')) || []).map(expense => {
        new Expense(expense);
      });
    }

    addExpense(text, amount) {
        this.expenses.push(new Expense(text, amount));
    }

    editExpense(id, updatedText) {
        this.expenses = this.expenses.map(expense => {
            expense.id === id ? new Expense({
                ...expense,
                text: updatedText
            }) : expense
        });
    }

    deleteExpense(_id) {
        this.expenses = this.expenses.filter(({id}) => {
            id !== _id
        });
    }

  
}