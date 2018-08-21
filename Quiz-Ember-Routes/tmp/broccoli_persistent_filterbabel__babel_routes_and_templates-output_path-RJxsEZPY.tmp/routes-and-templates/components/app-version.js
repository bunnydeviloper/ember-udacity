define('routes-and-templates/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'routes-and-templates/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _routesAndTemplatesConfigEnvironment) {

  var name = _routesAndTemplatesConfigEnvironment['default'].APP.name;
  var version = _routesAndTemplatesConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});