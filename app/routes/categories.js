import Ember from 'ember';


export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('category');
  }
});


// categories will calculate what percentage of expenses accounted for each one

// $50 groceries, $50 movies = category calculates that each one accounted for 50%
// and displays that in a beautiful pie chart

