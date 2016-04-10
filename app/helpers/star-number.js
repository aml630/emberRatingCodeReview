import Ember from 'ember';

export function starNumber(params) {

  console.log(params[0]);

  if(params[0]=== 1) {
    return Ember.String.htmlSafe('<p>One Star!</p>');
  }else if(params[0]===2){
    return Ember.String.htmlSafe('<p>Two Star!</p>');
  }else if(params[0]===3){
    return Ember.String.htmlSafe('<p>Three Star!</p>');
  }else if(params[0]===4){
    return Ember.String.htmlSafe('<p>Four Star!</p>');
  }else if(params[0]===5){
    return Ember.String.htmlSafe('<p>Five Star!</p>');
  }
}

export default Ember.Helper.helper(starNumber);
