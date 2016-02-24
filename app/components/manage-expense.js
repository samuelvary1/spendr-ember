import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      debugger;
      // give the select fields a value of chosenCategory so that you access it like this: this.get('chosenCategory')
      // identify how to grab the select category from the page
      // pass it as an argument to the 'onSubmit'
      // this.sendAction('onSubmit', myArg);
      this.sendAction('onSubmit');
    }
  }
});
