export class ExpenseViews {
    constructor() {
        this.expenseList = document.getElementById('expense-list');
    }

    displayExpenses(expenses) {
        this.expenseList.innerHTML = '';

        expenses.forEach(expense => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${expense.text}</td>
                <td>${expense.amount}</td>
                <td><a href="#" class="delete" data-id="${expense.id}">X</a></td>
            `;

            this.expenseList.appendChild(tr);
        });
    }
}