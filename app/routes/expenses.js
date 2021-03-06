import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
    }
  }
});


// total expenses - subtracted from their week's budget

// percentage of total spending towards which categories

// percent remaining in budget / wages
