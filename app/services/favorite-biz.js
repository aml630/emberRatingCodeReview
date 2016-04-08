import Ember from 'ember';

export default Ember.Service.extend({
  businesses: [],

add(business) {
  this.get('businesses').pushObject(business);
  console.log(this.get('businesses'));
}
});
