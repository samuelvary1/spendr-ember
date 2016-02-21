import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('category');
  },
  actions: {
    createCategory(){
      let model = this.modelFor(this.routeName);

      model.save().then((category) => {
        this.transitionTo("categories.category", category);
      });
    }
  }
});
