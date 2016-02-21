import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('number'),
 	note: DS.attr('string'),
  category: DS.belongsTo('category', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
