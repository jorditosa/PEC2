class Expense {
    constructor(text, amount) {
        this.text = text,
        this.amount = amount,
        this.id = this.createId()
    }

    createId() {
        return Math.random(new Date().getTime()) + 1;
    }
}

class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

    addExpense(text, amount) {
        const expense = new Expense(text, amount);
        this.expenses = [...this.expenses, expense];
        
        // Guardar en local storage
        this.saveExpensesToLocalStorage(this.expenses);
  }

    editExpense(index, text, amount) {
        const expense = this.expenses[index];
        expense.text = text;
        expense.amount = amount;
    }

    removeExpense(index) {
        this.expenses = this.expenses.filter((expense, i) => i !== index);
    }

    getExpense(index) {
        // obtener desde local storage
        const expensesFromLocalStorage = this.getExpensesFromLocalStorage();

        // Mostrar los resultados guardados en local storage
        expensesFromLocalStorage.forEach(expense => {
            const expenseItem = this.createElement("li", expense.amount < 0 ? "minus" : "plus");
            expenseItem.innerHTML = `
            ${expense.text} <span>${expense.amount} €</span> <button class="delete-btn" onclick="app.removeExpense(${expense.id})">X</button>
            `;
            this.expenseList.append(expenseItem);
        });

        return this.expenses[index];
  }

    getExpenses() {
        return this.expenses;
    }

    saveExpensesToLocalStorage(expenses) {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    getExpensesFromLocalStorage() {
        return JSON.parse(localStorage.getItem("expenses"));
    }
}
