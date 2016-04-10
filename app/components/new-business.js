import Ember from 'ember';

export default Ember.Component.extend({
  favoriteBiz: Ember.inject.service(),

  favoriteCount: Ember.computed('favoriteBiz.businesses.length', function () {
    return this.get('favoriteBiz').businesses.length;
  }),
  favoriteList: Ember.computed('favoriteBiz.businesses', function () {
    console.log("Fav list log "  + this.get('favoriteBiz.businesses'));
  }),

  actions: {
    savebiz() {
      var attributes = {
        name: this.get('name'),
        image: this.get('image'),
        description: this.get('description'),
      };
      console.log(attributes);

      this.sendAction('savebiz', attributes);

    }
  }
});
