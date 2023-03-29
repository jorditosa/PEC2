class ExpenseModel {
    constructor() {
        this.expenses = [ id, text, amount ];
    }

    addExpense(id, text, amount) {
        this.expenses(...this.expenses, { id, text, amount });
    }

    removeExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
    }

    getExpenses() {
        return this.expenses;
    }

    getExpense(id) {
        return this.expenses.find(expense => expense.id === id);
    }

    getTotal() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
    

} 