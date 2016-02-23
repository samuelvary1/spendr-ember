import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    return this.store.findAll('user');
  },

  actions: {
    delete(user) {
      user.destroyRecord();
      this.transitionToRoute('users.index');
    }
  }
});


// calculate weekly salary based on monthly
