import Route from '@ember/routing/route';
// import Ember from 'ember';
import $ from 'jquery';

export default Route.extend({
  model() {
  // same as: model: function() {, just new syntax
    return $.get('/menu/menu.json');
    // same as: return Ember.$.get('/menu/menu.json');
  }
});
