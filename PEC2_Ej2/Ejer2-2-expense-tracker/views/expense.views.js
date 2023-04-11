class ExpenseView {
  constructor() {
    this.balance = document.getElementById('balance');
    this.money_plus = document.getElementById('money-plus');
    this.money_minus = document.getElementById('money-minus');
    this.list = document.getElementById('list');
    this.form = document.getElementById('form');
    this.text = document.getElementById('text');
    this.amount = document.getElementById('amount');

    this.initLocalListeners();
  }

  get expenseText() {
    return this.text.value;
  }

  get expenseAmount() {
    return this.amount.value;
  }

  resetInputs() {
    this.text.value = ""
    this.amount.value = ""
  }

 
}