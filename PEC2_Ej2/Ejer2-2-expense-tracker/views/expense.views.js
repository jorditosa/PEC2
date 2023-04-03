class ExpenseViews {
    constructor() {
        this.app = document.getElementById("root");

        this.balance = document.getElementById("balance");
        this.moneyPlus = document.getElementById("money-plus");
        this.moneyMinus = document.getElementById("money-minus");

        this.expenseList = document.getElementById("list");
        this.form = document.getElementById("form");
        this.text = document.getElementById("text");
        this.amount = document.getElementById("amount");

    }
    
    getExpensesFromLocalStorage() {
      if(localStorage.getItem("expenses") === null) {
        localStorage.setItem("expenses", JSON.stringify([]));
      }

      return JSON.parse(localStorage.getItem("expenses"));
    }

    // Guardar en local storage
    saveExpensesToLocalStorage(expenses) {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }


    get expenseText() {
        return this.text.value;
    }

    get expenseAmount() {
        return this.amount.value;
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
    
        if (className) element.classList.add(className);
    
        return element;
      }

    displayExpenses(expenses) {
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

        const expenseList = expenses.map((expense, i) => {
            const expenseItem = this.createElement("li", expense.amount < 0 ? "minus" : "plus");
            expenseItem.innerHTML = `
            ${expense.text} <span>${expense.amount} €</span> <button class="delete-btn" onclick="app.removeExpense(${i})">X</button>
            `;
            return expenseItem;
        });
        this.expenseList.innerHTML = "";
        this.expenseList.append(...expenseList);
    }

    displayBalance(expenses) {
        console.log(expenses)
        const amounts = expenses.map(expense => +expense.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
        const income = amounts
          .filter(item => item > 0)
          .reduce((acc, item) => (acc += item), 0)
          .toFixed(2);
        const expense = (
          amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
          -1
        ).toFixed(2);
    
        this.balance.innerText = `${total} €`;
        this.moneyPlus.innerText = `${income} €`;
        this.moneyMinus.innerText = `${expense} €`;
      }

}
