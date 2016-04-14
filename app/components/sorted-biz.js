import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['reviews.length:asc'],
  sortedBusinesses: Ember.computed.sort('model', 'sortBy'),
  actions: {
    saveRating(params) {
      this.sendAction('saveRating', params);
    },
    deleteBiz(business){
      this.sendAction('deleteBiz', business)
    }
  }
});
