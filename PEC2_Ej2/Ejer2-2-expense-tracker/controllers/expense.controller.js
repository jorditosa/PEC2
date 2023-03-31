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

    displayBalance() {
        const expenses = this.getExpenses();
        this.view.displayBalance(expenses);
    }
    
    init() {
        this.displayExpenses(); // Llamamos al método para mostrar las expenses al iniciar la aplicación
        this.view.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addExpense(this.view.expenseText, this.view.expenseAmount);
            this.displayExpenses();
            this.displayBalance();
        });

        this.view.expenseList.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                const index = e.target.dataset.index;
                this.removeExpense(index);
                this.displayExpenses();
            }
        }
        );

    }
    


}