class ExpenseServices {
    constructor() {
      this.expenses = (JSON.parse(localStorage.getItem('expenses')) || []).map(expense => {
        new Expense(expense);
      });
    }

    // Subimos al local storage
    commit() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }

    addExpense(text, amount) {
        this.expenses.push(new Expense(text, amount));

        this.commit(this.expenses);
    }

    editExpense(id, updatedText) {
        this.expenses = this.expenses.map(expense => {
            expense.id === id ? new Expense({
                ...expense,
                text: updatedText
            }) : expense
        });

        this.commit(this.expenses);
    }

    deleteExpense(_id) {
        this.expenses = this.expenses.filter(({id}) => {
            id !== _id
        });

        this.commit(this.expenses);
    }

  
}