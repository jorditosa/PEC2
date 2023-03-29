export class ExpenseController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

    };

    addExpense(text, amount) {
        const id = this.model.addExpense(text, amount);
        this.view.addExpense(id, text, amount);
    }

    removeExpense(id) {
        this.model.removeExpense(id);
        this.view.removeExpense(id);
    }

    updateExpense(id, text, amount) {
        this.model.updateExpense(id, text, amount);
        this.view.updateExpense(id, text, amount);
    }
}