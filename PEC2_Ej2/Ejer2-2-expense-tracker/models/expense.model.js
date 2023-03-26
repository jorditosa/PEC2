class ExpenseModel {
    constructor() {
        this.expenses = [];
    }

    addExpense(expense) {
        this.expenses.push(expense);
    }

    getExpenses() {
        return this.expenses;
    }

    deleteExpense(index) {
        this.expenses.splice(index, 1);
    }
}