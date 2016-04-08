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
    saveReview(reviewParams) {
      var newReview = this.store.createRecord('review', params);
      var business = reviewParams.business;
      business.get('reviews').addObject(newReview);
      newReview.save().then(){
        return business.save();
      }
    }
  }
});
