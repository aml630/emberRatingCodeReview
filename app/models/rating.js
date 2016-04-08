import DS from 'ember-data';

export default DS.Model.extend({
  business: DS.belongsTo('business', {async:true}),
  stars: DS.attr()
});