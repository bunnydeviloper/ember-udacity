define('routes-and-templates/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'routes-and-templates/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _routesAndTemplatesConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_routesAndTemplatesConfigEnvironment['default'].APP.name, _routesAndTemplatesConfigEnvironment['default'].APP.version)
  };
});