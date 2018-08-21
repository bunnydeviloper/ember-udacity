define('routes-and-templates/app', ['exports', 'ember', 'ember-resolver', 'ember/load-initializers', 'routes-and-templates/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _routesAndTemplatesConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _routesAndTemplatesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _routesAndTemplatesConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _routesAndTemplatesConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});