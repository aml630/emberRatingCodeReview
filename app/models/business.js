import DS from 'ember-data';

export default DS.Model.extend({
  ratings: DS.hasMany('rating', {async:true}),
  name: DS.attr(),
  image: DS.attr(),
  description: DS.attr()
});
