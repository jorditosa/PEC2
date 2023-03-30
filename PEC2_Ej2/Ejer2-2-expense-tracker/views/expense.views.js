class ExpenseViews {
    constructor() {
        this.app = this.getElementById("root");

        this.balance = document.getElementById("balance");
        this.moneyPlus = document.getElementById("money-plus");
        this.moneyMinus = document.getElementById("money-minus");

        this.expenseList = document.getElementById("list");
        this.form = document.getElementById("form");
        this.text = document.getElementById("text");
        this.amount = document.getElementById("amount");

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
        // Eliminar Nodes
        while (this.expenses.firstChild) {
            this.expenses.removeChild(this.expenses.firstChild);
        }

        // Mostrar mensaje por default
        if (text.value.trim() === '' || amount.value.trim() === '') {
            alert('Please add a text and amount');
        } else {
            const transaction = {
              id: expenses.id,
              text: text.value,
              amount: +amount.value
            };
        
            transactions.push(transaction);
        
            addTransactionDOM(transaction);
        
            updateValues();
        
            updateLocalStorage();
        
            text.value = '';
            amount.value = '';
          }
          // Debugging
          console.log(expenses);
    }
}
