import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('expense');
  },
  actions: {
    createExpense(){
      let model = this.modelFor(this.routeName);

      model.save().then((expense) => {
        this.transitionTo("expenses.expense", expense);
      });
    }
  }
});
