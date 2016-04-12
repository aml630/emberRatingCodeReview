import Ember from 'ember';
// import moment from 'moment';


export default Ember.Route.extend({
sortBy: ['stars.asc'],
sortedRatings: Ember.computed.sort('business.ratings', 'sortBy'),

  model(business) {
    return this.store.findRecord('business', business.business_id);
  },
  actions: {
    saveRating(reviewParams) {
      var newRating = this.store.createRecord('rating', reviewParams);
    
      var business = reviewParams.business;
      business.get('ratings').addObject(newRating);
      newRating.save().then(function () {
        console.log("sortedRatings "+ sortedRatings);
        return business.save();
      });
  }
}
});
