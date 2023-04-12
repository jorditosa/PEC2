class Expense {
    constructor( {id, text, amount}) {
      this.id = id || this.uuid();
      this.text = text;
      this.amount = +amount;
    }

    uuid() {
        return new Date().getTime();
        }    
  }