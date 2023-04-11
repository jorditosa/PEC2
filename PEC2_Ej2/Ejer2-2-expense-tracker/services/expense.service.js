class ExpenseService {
    constructor() {
        this.expenses = (JSON.parse(localStorage.getItem("expenses")) || []).map( expense => new Expense(expense))
    }
    
    bindExpenseListChanged(callback) {
        this.onExpenseListChange = callback;
    }

    _commit(expenses) {
        this.onExpenseListChange(expenses);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    addExpense(text, amount) {
        this.expenses.push(new Expense({text, amount}));

        this._commit(this.expenses)
    }

    editExpense( id, updatedText, updatedAmount) {
        this.expenses = this.expenses.map(expense => {
            expense.id === id ? new Expense({
                ...expense,
                text: updatedText,
                amount: updatedAmount
            })
            : expense
        })

        this._commit(this.expenses)
    }

    deleteExpense(id) {
        this.expenses = this.expenses.filter(({ id }) => id !== id);

        this._commit(this.expenses)
    }
}