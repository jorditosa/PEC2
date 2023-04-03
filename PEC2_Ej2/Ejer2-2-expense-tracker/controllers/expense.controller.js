class ExpenseController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

    };

    //Cramos el CRUD de la aplicación con add, edit, remove y get
    addExpense(text, amount) {
        this.model.addExpense(text, amount);

        // Guardar en local storage
        this.model.saveExpensesToLocalStorage(this.model.expenses);
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

        // obtener desde local storage
        const expensesFromLocalStorage = this.view.getExpensesFromLocalStorage();
    }
    
    // En esta función he montado todo los event listeners
    init() {
        this.displayExpenses();
        this.displayBalance();
        
        this.view.form.addEventListener("submit", (e) => {
            e.preventDefault();  

            const text = this.view.expenseText;
            const amount = this.view.expenseAmount;

            if (text !== "" && amount !== "") {
                this.addExpense(text, amount);
                this.displayExpenses();
                this.displayBalance();
                this.view.form.reset();
            }


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