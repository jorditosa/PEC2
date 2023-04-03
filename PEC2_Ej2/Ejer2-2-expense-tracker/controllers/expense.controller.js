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

        // obtener desde local storage
        const expensesFromLocalStorage = this.view.getExpensesFromLocalStorage();
        if (expensesFromLocalStorage) {
            this.view.displayExpenses(expensesFromLocalStorage);
        }
    }

    displayBalance() {
        const expenses = this.getExpenses();
        this.view.displayBalance(expenses);

        // obtener desde local storage
        const expensesFromLocalStorage = this.view.getExpensesFromLocalStorage();
        if (expensesFromLocalStorage) {
            this.view.displayBalance(expensesFromLocalStorage);
        }
    }
    
    // En esta función he montado todo los event listeners
    init() {
        this.displayExpenses(); // Llamamos al método para mostrar las expenses al iniciar la aplicación
        this.view.form.addEventListener("submit", (e) => {
            e.preventDefault();  

            // Validaciones
            if (this.view.expenseText === "" || this.view.expenseAmount === "") {
                alert("Por favor, introduzca un concepto");
                return;
            }

            this.addExpense(this.view.expenseText, this.view.expenseAmount);
            this.displayExpenses();
            this.displayBalance();

            // Eliminar input values
            this.view.text.value = "";
            this.view.amount.value = "";
        });

        this.view.expenseList.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                const id = e.target.parentElement;
                console.log(e.target.parentElement)
                this.removeExpense(id);
                this.displayExpenses();
                this.displayBalance();
            }
        }
        );

    }
    


}