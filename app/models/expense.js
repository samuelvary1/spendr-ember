import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('float'),
  string: DS.attr('string'),
  categories: DS.belongsTo('category'),
  users: DS.belongsTo('user')
});
