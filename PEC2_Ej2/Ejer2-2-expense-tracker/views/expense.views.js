class ExpenseView {
  constructor() {
    this.balance = document.getElementById('balance');
    this.money_plus = document.getElementById('money-plus');
    this.money_minus = document.getElementById('money-minus');
    this.list = document.getElementById('list');
    this.form = document.getElementById('form');
    this.text = document.getElementById('text');
    this.amount = document.getElementById('amount');

    this.expenseList = this.createElement("ul", "expense-list");

    this.initLocalListeners();
  }

  get _expenseText() {
    return this.text.value;
  }

  get _expenseAmount() {
    return this.amount.value;
  }

  resetInputs() {
    this.text.value = ""
    this.amount.value = ""
  }

  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  displayExpenses(expenses) {
    // Eliminar nodos
    while(this.expenseList.firstChild) {
      this.expenseList.removeChild(this.expenseList.firstChild)
    }

    // Mostrar un mensaje si no hay ningún dato y sino crear la lista en el DOM
    if(expenses.length === 0) {
      const p = this.createElement("p");
      p.textContent = "No hay ningún movimiento."
      this.expenseList.append(p)
    } else {
      // Crear nodos
      expenses.forEach(expense => {
        const li = this.createElement("li");
        li.is = expense.id;

        const text = this.createElement("p");
        text.textContent = expense.text;

        const amount = this.createElement("span");
        amount.textContent = expense.amount;

        // Boton eliminar
        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "X";

        //Montar todo el nodo
        li.append(text, amount, deleteButton)
      });
    }

     // Debugging
     console.log(expenses)
  }

  initLocalListeners() {
    this.form.addEventListener("submit", e => {
      e.preventDefault();

      if(this._expenseText && this._expenseAmount) {
        handler(this._expenseText, this._expenseAmount)
      }

      this.resetInputs()
    })
  }

  bindAddExpense(handler) {
    this.form.addEventListener("submit", e => {
      e.preventDefault();

      if(this._expenseText && this._expenseAmount) {
        handler(this._expenseText, this._expenseAmount)
      }

      this.resetInputs()
    })
  }

  bindDeleteExpense(handler) {
    this.expenseList.addEventListener("click", e => {
      if(e.target.classList.contains("delete")) {
        const id = e.target.parentElement.id;
        handler(id)
      }
    });    
  }

  bindEditExpense(handler) {
    this.expenseList.addEventListener("input", e => {
      if(e.target.classList.contains("editable")) {
        const id = e.target.parentElement.id;
        const text = e.target.innerText;
        handler(id, text)
      }
    });
  } 
}