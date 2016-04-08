import Ember from 'ember';

export default Ember.Route.extend({
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
    }
  }
});
