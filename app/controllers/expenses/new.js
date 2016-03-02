import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  currentUser: Ember.computed.reads('applicationController.currentUser'),

  allCategories: Ember.computed(function(){
   return this.store.findAll('category');
  //  GET www.myapi.com/api/v1/categories
    }),

    actions: {
      createExpense(){
        let expense = this.get('model');
        console.log(expense.get('categories'));
        console.log(expense.get('categories').objectAt(0).get('name'));
        expense.save().then((expense) => {
          this.transitionToRoute("expenses.expense", expense);
          });
        },

      updateSelectedCategory(selectedCat){

        var expense = this.get('model');
        expense.set('category', selectedCat);
        }
      }
});
