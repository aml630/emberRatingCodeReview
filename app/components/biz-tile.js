import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteBiz(business) {
      this.sendAction('deleteBiz', business);
    }
  }
});
