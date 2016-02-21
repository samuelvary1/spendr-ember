import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('user', {path: ":user_id"});
  });
  this.route('categories', function() {
    this.route('new');
  });
  this.route('expenses', function() {
    this.route('new');
  });
  this.route('login');
});

export default Router;
