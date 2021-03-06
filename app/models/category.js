import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  users: DS.belongsTo('user', { async: true }),
  expenses: DS.hasMany('expenses', { async: true })
});
