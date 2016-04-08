import Ember from 'ember';

export default Ember.Component.extend({
  showRating: false,

  actions: {
    show() {
      if(this.get('showRating')) {
        this.set('showRating', false);
      }else {
      this.set('showRating', true);
    }
  },
    saveRating() {
      // console.log('running');
      var ratingParams = {
      business: this.get('business'),
      stars: this.get('stars')
    };
    // console.log(ratingParams);

      this.sendAction('saveRating', ratingParams);
      // console.log(ratingParams);
    }
  }
});
