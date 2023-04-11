class ExpenseView {
  constructor() {
    this.balance = document.getElementById('balance');
    this.money_plus = document.getElementById('money-plus');
    this.money_minus = document.getElementById('money-minus');
    this.list = document.getElementById('list');
    this.form = document.getElementById('form');
    this.text = document.getElementById('text');
    this.amount = document.getElementById('amount');
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
    this.list.innerHTML = "";

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

        //Montar todo el nodo
        li.classList.add(expense.amount < 0 ? "minus" : "plus")
        li.append(textNode, amountNode, deleteButton)

        // Montar el nodo en el DOM
        this.list.appendChild(li)
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

      this.resetInputs()
    })
  }

  bindDeleteExpense(handler) {
    this.list.addEventListener("click", e => {
      if(e.target.classList.contains("delete-btn")) {
        const id = e.target.parentElement.id;
        handler(id)
      }
    });    
  }

  bindEditExpense(handler) {
    this.list.addEventListener("input", e => {
      if(e.target.classList.contains("editable")) {
        const id = e.target.parentElement.id;
        const text = e.target.innerText;
        handler(id, text)
      }
    });
  } 
}