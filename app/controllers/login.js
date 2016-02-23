import Ember from 'ember';

export default Ember.Controller.extend({
 applicationController: Ember.inject.controller('application'),
 actions: {
   setCurrentUser(user){
     debugger;
     this.get("applicationController").set('currentUser', user);
   }
 }
});


// import Ember from 'ember';
// const { service } = Ember.inject;
// const { store } = Ember.inject;
//
// export default Ember.Controller.extend({
//
// session: service('session'),
// store: service("store"),
//
//   session: Ember.inject.service('session'),
//   actions: {
//    authenticate() {
//      let { identification, password } = this.getProperties('identification', 'password');
//      this.get('session').authenticate('authenticator:devise', identification, password).then(()=>{
//        console.log(this.get("session.isAuthenticated"));
//      }).catch((reason) => {
//        this.set('errorMessage', reason.error || reason);
//      });
//    }
//  }
// });
