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
        this.expenses = this.expenses.map(expense => expense.id === _id ? { ...expense, text: updatedText, amount: updatedAmount } : expense);

        this._commit(this.expenses)
    }

    deleteExpense(_id) {
        this.expenses = this.expenses.filter(({ id }) => id !== _id);
        
        this._commit(this.expenses);
    }

    updateIncomeOutput(expenses) {
        const total = expenses.filter(expense => expense.amount > 0).reduce((acc, expense) => acc + expense.amount, 0).toFixed(2) + ' €';
        return total;
    }

    updateExpenseOutput(expenses) {
        const total = expenses.filter(expense => expense.amount < 0).reduce((acc, expense) => acc + expense.amount, 0).toFixed(2) + ' €';
        return total;
    }
}