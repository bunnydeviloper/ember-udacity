import Ember from 'ember';
// import $ from 'jquery';

export default Ember.Route.extend({
  model() {
    return Ember.$.get('/store/cookies.json');
  }
});
