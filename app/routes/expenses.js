import Ember from 'ember';


export default Ember.Route.extend( {
  model: function(){
    return this.store.findAll('expense');
  },

  actions: {
  	addExpense(newExpense){
  		this.modelFor(this.routeName).pushObject(
  			newExpense);
  		this.controllerFor(this.routeName).send("resetForm");
  	},
    delete(expense) {
      expense.destroyRecord();
      this.transitionTo('expenses.index');
    },

    totalExpenses(){
      this.modelFor(this.routeName)
    }
  }
});


// total expenses - subtracted from their week's budget

// percentage of total spending towards which categories

// percent remaining in budget / wages
