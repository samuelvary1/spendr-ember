import Ember from 'ember';


    var total = 0;
    var allExpenses = [];

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('expense');

  },
  actions: {
    createExpense(){
      let model = this.modelFor(this.routeName);

      model.save().then((expense) => {
        this.transitionTo("expenses.expense", expense);

      var expense = $("#expense-amount").val();
      allExpenses.pushObject(parseInt(expense));

      for(var i = 0; i < allExpenses.length; i++) {
          total += allExpenses[i];
      }

      });
    }
  }
});
