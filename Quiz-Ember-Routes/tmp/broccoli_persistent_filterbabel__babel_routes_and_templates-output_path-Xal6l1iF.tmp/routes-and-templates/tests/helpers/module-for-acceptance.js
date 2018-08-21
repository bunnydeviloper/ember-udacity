define('routes-and-templates/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'routes-and-templates/tests/helpers/start-app', 'routes-and-templates/tests/helpers/destroy-app'], function (exports, _qunit, _routesAndTemplatesTestsHelpersStartApp, _routesAndTemplatesTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _routesAndTemplatesTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _routesAndTemplatesTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});