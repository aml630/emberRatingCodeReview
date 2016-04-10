import Ember from 'ember';

export default Ember.Route.extend({
  
  model(business) {
    return this.store.findRecord('business', business.business_id);
  },
  actions: {
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
