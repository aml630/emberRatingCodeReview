import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('business');
    return this.store.findAll('reviews');
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
