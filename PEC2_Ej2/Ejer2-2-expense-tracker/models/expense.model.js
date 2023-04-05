class Expense {
    constructor( text, amount) {
      this.id = this.uuid();
      this.text = text;
      this.amount = amount;
    }

    uuid() {
        return Math.floor(Math.random() * 100000000);
        }

  }
  