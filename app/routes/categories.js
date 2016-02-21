import Ember from 'ember';

export default Ember.Route.extend( {
  model: function(){
    return this.store.findAll('category');
  },

  actions: {
  	createCategory(newCategory){
  		this.modelFor(this.routeName).pushObject(
  			newCategory);
  		this.controllerFor(this.routeName).send("resetForm");
  	},
    delete(category) {
      category.destroyRecord();
      this.transitionTo('categories.index');
    }
  }
});



// categories will calculate what percentage of categorys accounted for each one

// $50 groceries, $50 movies = category calculates that each one accounted for 50%
// and displays that in a beautiful pie chart
