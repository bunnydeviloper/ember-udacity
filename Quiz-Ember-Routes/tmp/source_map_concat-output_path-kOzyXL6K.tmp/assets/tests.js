define('routes-and-templates/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('routes-and-templates/tests/grader/bricks-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bricks', 'Quiz - Route', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('bricks exists', function (assert) {
    var route = this.subject();
    assert.ok(route, '"brick" route exists');
  });
});
define('routes-and-templates/tests/grader/bricks-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - grader/bricks-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'grader/bricks-test.js should pass jshint.');
  });
});
define('routes-and-templates/tests/grader/lego-path-loads-brick-template-test', ['exports', 'qunit', 'routes-and-templates/tests/helpers/module-for-acceptance'], function (exports, _qunit, _routesAndTemplatesTestsHelpersModuleForAcceptance) {

  (0, _routesAndTemplatesTestsHelpersModuleForAcceptance['default'])('Quiz - Routes and Template');

  function elementExists(elementToFind) {
    return find(elementToFind).text().length > 0;
  }

  function canSeeTemplateContents(textToFind) {
    return find('.contents').text().toLowerCase().indexOf(textToFind) >= 0;
  }

  (0, _qunit.test)('Can see brick content after loading /legos', function (assert) {
    visit('/legos');

    andThen(function () {
      assert.equal(currentURL(), '/legos', 'The correct path has not been updated to "/legos".');
      assert.equal(currentRouteName(), 'bricks', 'The current route should not have changed, but stayed "bricks".');
      assert.equal(elementExists('#brick-heading'), true, 'Brick template has a heading with ID "brick-heading".');
      assert.equal(elementExists('.colors'), true, 'Color list with class "colors" exists.');
      assert.equal(canSeeTemplateContents('red'), true, 'Can see the color "red" in the brick template.');
      assert.equal(canSeeTemplateContents('blue'), true, 'Can see the color "blue" in the brick template.');
      assert.equal(canSeeTemplateContents('green'), true, 'Can see the color "green" in the brick template.');
    });
  });
});
define('routes-and-templates/tests/grader/lego-path-loads-brick-template-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - grader/lego-path-loads-brick-template-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'grader/lego-path-loads-brick-template-test.js should pass jshint.');
  });
});
define('routes-and-templates/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('routes-and-templates/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
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
define('routes-and-templates/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('routes-and-templates/tests/helpers/resolver', ['exports', 'ember-resolver', 'routes-and-templates/config/environment'], function (exports, _emberResolver, _routesAndTemplatesConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _routesAndTemplatesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _routesAndTemplatesConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('routes-and-templates/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('routes-and-templates/tests/helpers/start-app', ['exports', 'ember', 'routes-and-templates/app', 'routes-and-templates/config/environment'], function (exports, _ember, _routesAndTemplatesApp, _routesAndTemplatesConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _routesAndTemplatesConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _routesAndTemplatesApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('routes-and-templates/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('routes-and-templates/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('routes-and-templates/tests/routes/bricks.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/bricks.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bricks.js should pass jshint.');
  });
});
define('routes-and-templates/tests/test-helper', ['exports', 'routes-and-templates/tests/helpers/resolver', 'ember-qunit'], function (exports, _routesAndTemplatesTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_routesAndTemplatesTestsHelpersResolver['default']);
});
define('routes-and-templates/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('routes-and-templates/tests/unit/routes/bricks-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bricks', 'Unit | Route | bricks', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('routes-and-templates/tests/unit/routes/bricks-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/bricks-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bricks-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('routes-and-templates/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
