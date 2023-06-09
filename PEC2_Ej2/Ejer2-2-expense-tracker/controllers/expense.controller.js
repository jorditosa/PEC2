class ExpenseController {
    constructor(service, view) {
        this.service = service;
        this.view = view;

        //Vinculación explicita
        this.service.bindExpenseListChanged(this.onExpenseListChanged.bind(this));
        this.view.bindAddExpense(this.handleAddExpense);
        this.view.bindDeleteExpense(this.handleDeleteExpense);
        this.view.bindEditExpense(this.handleEditExpense);

        // Mostrando las expenses iniciales
        this.onExpenseListChanged(this.service.expenses);
    }

    onExpenseListChanged = expenses => {
        this.view.displayExpenses(expenses);
        this.view.displayInfo(expenses);
    }

    handleAddExpense = (text, amount) => {
        this.service.addExpense(text, amount);
    }

    handleDeleteExpense = id => {
        this.service.deleteExpense(id);
    }

    handleEditExpense = (id, text, amount) => {
        this.service.editExpense(id, text, amount);
    }
}