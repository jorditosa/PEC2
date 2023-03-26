
class ExpenseController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.model.bindExpenseListChanged(this.onExpenseListChanged);
        this.view.bindAddExpense(this.handleAddExpense);
        this.view.bindEditExpense(this.handleEditExpense);
        this.view.bindDeleteExpense(this.handleDeleteExpense);
        this.view.bindToggleExpense(this.handleToggleExpense);
        this.onExpenseListChanged(this.model.expenses);
    };
}