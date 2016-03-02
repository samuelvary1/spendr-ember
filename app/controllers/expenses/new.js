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
        console.log(expense.get('category'));
        console.log(expense.get('category').get('name'));
        console.log("Hardcoding the cat");
        this.store.findRecord('category', 1).then((cat)=>{

          expense.set('category', cat);
          expense.save().then((expense) => {
            this.transitionToRoute("expenses.expense", expense);
          });
        });
      },

      updateSelectedCategory(selectedCat){
        console.log(selectedCat);
        var expense = this.get('model');
        console.log(expense.get("category"));
        expense.set('category', selectedCat);
        console.log(expense.get("category"));
        }
      }
});
