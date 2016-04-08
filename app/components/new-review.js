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
  },
    saveReview() {
      console.log('running');
      var reviewParams = {
      business: this.get('business'),
      stars: this.get('stars')
    };
    console.log(reviewParams);

      this.sendAction('saveReview', reviewParams);
      console.log(reviewParams);
    }
  }
});
