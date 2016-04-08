import Ember from 'ember';

export default Ember.Component.extend({
  showReview: false,

  actions: {
    show() {
      if(this.get('showReview')) {
        this.set('showReview', false);
      }else {
      this.set('showReview', true);
      }
    }
  }
});
