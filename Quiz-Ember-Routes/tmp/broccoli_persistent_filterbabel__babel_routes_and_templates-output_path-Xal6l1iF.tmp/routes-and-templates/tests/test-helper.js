define('routes-and-templates/tests/test-helper', ['exports', 'routes-and-templates/tests/helpers/resolver', 'ember-qunit'], function (exports, _routesAndTemplatesTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_routesAndTemplatesTestsHelpersResolver['default']);
});