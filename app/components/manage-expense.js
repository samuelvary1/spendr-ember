import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      this.sendAction('onSubmit');
    },

    selectACategory(selection, value){

      this.sendAction('triggerUpdateSelectedCategory', selection);
    }
  }
});
