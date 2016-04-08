import Ember from 'ember';

export default Ember.Component.extend({
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
