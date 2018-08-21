define('routes-and-templates/router', ['exports', 'ember', 'routes-and-templates/config/environment'], function (exports, _ember, _routesAndTemplatesConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _routesAndTemplatesConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('bricks', { path: '/legos' });
  });

  exports['default'] = Router;
});