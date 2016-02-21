import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('number'),
 	note: DS.attr('string'),
  categories: DS.belongsTo('category', { async: true }),
  users: DS.belongsTo('user', { async: true })
});
