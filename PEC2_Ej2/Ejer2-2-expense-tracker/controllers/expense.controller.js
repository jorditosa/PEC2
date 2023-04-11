class ExpenseController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Explicit this binding
        this.view.bindAddExpense(this.handleAddExpense);
        this.view.bindDeleteExpense(this.handleDeleteExpense);
        this.view.bindEditExpense(this.handleEditExpense);

        // Display initial expenses
        this.onExpenseListChanged(this.model.expenses);
    }
}