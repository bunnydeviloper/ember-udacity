define('routes-and-templates/tests/helpers/resolver', ['exports', 'ember-resolver', 'routes-and-templates/config/environment'], function (exports, _emberResolver, _routesAndTemplatesConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _routesAndTemplatesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _routesAndTemplatesConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});