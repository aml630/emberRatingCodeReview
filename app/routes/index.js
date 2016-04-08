import Ember from 'ember';

export default Ember.Route.extend({
  favoriteBiz: Ember.inject.service(),

  model() {
    return this.store.findAll('business');
  },
  actions: {
    savebiz(attributes) {
      console.log("running");
      var newBusiness = this.store.createRecord('business', attributes);
      newBusiness.save();
      console.log(newBusiness);
    },
    deletebiz(business) {
      business.destroyRecord();
    },
    addToFavs(business) {
      this.get('favoriteBiz').add(business);
    },
    saveRating(reviewParams) {
      var newRating = this.store.createRecord('rating', reviewParams);
      console.log(newRating);
      var business = reviewParams.business;
      business.get('ratings').addObject(newRating);
      newRating.save().then(function () {
        return business.save();
      });
  }
  }
});
