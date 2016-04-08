import DS from 'ember-data';

export default DS.Model.extend({
  stars: DS.attr(),
    business: DS.belongsTo('business', {async:true}),
});
