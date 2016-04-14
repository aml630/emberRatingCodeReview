import Ember from 'ember';

export default Ember.Component.extend({
  favoriteBiz: Ember.inject.service(),

  favoriteCount: Ember.computed('favoriteBiz.businesses.length', function () {
    return this.get('favoriteBiz').businesses.length;
  }),
  favoriteList: Ember.computed('favoriteBiz.businesses.length', function () {
    var words = "";
    var list = this.get('favoriteBiz').businesses;
    console.log(list);
    for(var i = 0; i<list.length;i++){
      words+= list[i]._internalModel._data.name + ", "

    }

    return words
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
