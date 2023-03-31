class ExpenseController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

    };

    addExpense(text, amount) {
        this.model.addExpense(text, amount);
    }

    editExpense(index, text, amount) {
        this.model.editExpense(index, text, amount);
    }

    removeExpense(index) {
        this.model.removeExpense(index);
    }

    getExpense(index) {
        return this.model.getExpense(index);
    }

    getExpenses() {
        return this.model.expenses;
    }

    displayExpenses() {
        const expenses = this.getExpenses();
        this.view.displayExpenses(expenses);
    }
    
    init() {
        this.displayExpenses(); // Llamamos al método para mostrar las expenses al iniciar la aplicación
        this.view.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addExpense(this.view.expenseText, this.view.expenseAmount);
            this.displayExpenses();
        });
    }
    


}