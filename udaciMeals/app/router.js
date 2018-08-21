import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu');
  this.route('item', {path: 'item/:item_name'}, function() {
    this.route('nutrition');
  });
});

export default Router;
