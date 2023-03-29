import { ExpenseController } from './controllers/expense.controller.js';
import { ExpenseModel } from './models/expense.model.js';
import { ExpenseViews } from './views/expense.views.js';

const app = new ExpenseController(new ExpenseModel(), new ExpenseView());