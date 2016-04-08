import Ember from 'ember';

export function reviewTime(params) {
  var business = params[0];
  // console.log(business.get('ratings').get('length'))
   business.get('ratings').get('length'));
  if(business.get('ratings').get('length'))>= 5) {
    return Ember.String.htmlSafe('<p>Thats a lot of reviews!</p>');
  }
}

export default Ember.Helper.helper(reviewTime);
