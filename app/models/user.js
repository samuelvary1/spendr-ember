import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  monthly_salary: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  categories: DS.hasMany('category'),
  expenses: DS.hasMany('expense')
});
