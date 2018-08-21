import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('toys');
  this.route('bricks', {path: 'bricks/:bricks_color'}, function() {
    this.route('red');
  });
});

export default Router;
