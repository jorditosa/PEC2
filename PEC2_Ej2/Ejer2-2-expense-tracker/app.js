// Creamos una instancia de ExpenseModel
const expenses = new ExpenseModel();

// Agregamos algunos gastos
expenses.addExpense("Comida", 20);
expenses.addExpense("Transporte", 10);
expenses.addExpense("Entretenimiento", 50);

console.log(expenses)

// const app = new ExpenseController(new ExpenseModel(), new ExpenseViews());