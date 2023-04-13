class ExpenseView {
  constructor() {
    this.balance = document.getElementById('balance');
    this.money_plus = document.getElementById('money-plus');
    this.money_minus = document.getElementById('money-minus');
    this.list = document.getElementById('list');
    this.form = document.getElementById('form');
    this.text = document.getElementById('text');
    this.amount = document.getElementById('amount');

    this.editBtn = document.getElementById('edit-btn');
  }

  get _expenseText() {
    return this.text.value;
  }

  get _expenseAmount() {
    return this.amount.value;
  }

  get _expenses() {
    return JSON.parse(localStorage.getItem("expenses"));
  }

  resetInputs() {
    this.text.value = ""
    this.amount.value = ""
  }

  updateBalance(_expenses) {
    return _expenses.reduce((acc, expense) => acc + expense.amount, 0).toFixed(2) + ' €';
  }

  updateIncomeOutput(_expenses) {
    return _expenses.filter(expense => expense.amount >= 0).reduce((acc, expense) => acc + expense.amount, 0).toFixed(2) + ' €';
  }

  updateExpenseOutput(_expenses) {
    return _expenses.filter(expense => expense.amount < 0).reduce((acc, expense) => acc + expense.amount, 0).toFixed(2) + ' €';
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
    this.list.innerHTML = "";

    // Mostrar Balance e información de los incomes y expenses
    this.balance.textContent = this.updateBalance(expenses)
    this.money_plus.textContent = this.updateIncomeOutput(expenses)
    this.money_minus.textContent = this.updateExpenseOutput(expenses)

    // Mostrar un mensaje si no hay ningún dato y sino crear la lista en el DOM
    if(expenses.length === 0) {
      const p = this.createElement("p");
      p.textContent = "No hay ningún movimiento."
      this.list.appendChild(p)
    } else {
      // Crear nodos
      expenses.forEach(expense => {
        const li = this.createElement("li");
        li.id = expense.id;

        const textNode = this.createElement("p");
        textNode.textContent = expense.text;

        const amountNode = this.createElement("span");
        amountNode.textContent = expense.amount;

        // Boton eliminar
        const deleteButton = this.createElement("button", "delete-btn");
        deleteButton.textContent = "X";

        // Boton editar
        const editButton = this.createElement("button", "edit-btn");
        editButton.textContent = "Edit";

        //Montar todo el nodo
        li.classList.add(expense.amount < 0 ? "minus" : "plus")
        li.append(textNode, amountNode, editButton, deleteButton)

        // Montar el nodo en el DOM
        this.list.appendChild(li);
      });
    }

     // Debugging
     console.log(expenses)
  }

  bindAddExpense(handler) {
    this.form.addEventListener("submit", e => {
      e.preventDefault();

      if(this._expenseText && this._expenseAmount) {
        handler(this._expenseText, this._expenseAmount)
      }

      this.bindUpdateBalance();

      this.resetInputs()
    })
  }

  bindDeleteExpense(handler) {
    this.list.addEventListener("click", e => {
      if(e.target.classList.contains("delete-btn")) {
        const id = +(e.target.parentElement.id);
        handler(id)
      }
    });    
  }

  bindEditExpense(handler) {
    this.list.addEventListener("click", e => {
      if(e.target.classList.contains("edit-btn")) {
        const id = +(e.target.parentElement.id);
        const text = e.target.parentElement.childNodes[0].textContent;
        const amount = e.target.parentElement.childNodes[1].textContent;
        handler(id, text, amount)
    }
    });
  }
}