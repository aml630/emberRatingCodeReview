import Ember from 'ember';

export default Ember.Component.extend({
  favoriteBiz: Ember.inject.service(),
  actions: {
    deleteBiz(business) {
      this.sendAction('deleteBiz', business);
    }
    // addToFavs(business) {
    //   this.get('favoriteBiz').add(business);
    // }
  }
});
