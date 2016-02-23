import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser: function() {
      var username = this.get('userName');
      var monthly_salary = this.get('monthly_salary');
      var password = this.get('password');
      var password_confirmation = this.get('password_confirmation');

      var user = this.store.createRecord('user', {
        username: username,
        monthly_salary: monthly_salary,
        password: password,
        password_confirmation: password_confirmation
      });

      user.save();
     }
   }
});
