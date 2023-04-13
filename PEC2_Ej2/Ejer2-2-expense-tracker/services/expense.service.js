class ExpenseService {
    constructor() {
        this.expenses = (JSON.parse(localStorage.getItem("expenses")) || []).map(
            expense => new Expense(expense)
        );

        this.onExpenseListChange = null;
    }
    
    bindExpenseListChanged(callback) {
        this.onExpenseListChange = callback;
    }

    _commit(expenses) {
        this.onExpenseListChange(expenses);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    addExpense(text, amount) {
        const expense = new Expense({text, amount});
        this.expenses = [...this.expenses, expense];

        this._commit(this.expenses)
    }

    editExpense( _id, updatedText, updatedAmount) {
        this.expenses = this.expenses.filter(expense => expense.id === _id ? { ...expense, text: updatedText, amount: updatedAmount } : expense);

        this.deleteExpense(_id)

        this._commit(this.expenses)
    }

    deleteExpense(_id) {
        this.expenses = this.expenses.filter(({ id }) => id !== _id);
        
        this._commit(this.expenses);
    }
}