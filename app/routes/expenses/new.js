import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('expense');

  },
  actions: {
    createExpense(){
      // make sure this action takes an arg of the chosen expense
      // manually assocate chosen category to new expense
      let   expense = this.modelFor(this.routeName);
      // expense.category = choosenCat;
      expense.save().then((expense) => {
        this.transitionTo("expenses.expense", expense);
      });
    }
  }
});
