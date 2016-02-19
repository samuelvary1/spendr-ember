import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('categories');
  this.route('expenses');
  this.route('sign_in');
  this.route('sign_out');
  this.route('login');
});



export default Router;
