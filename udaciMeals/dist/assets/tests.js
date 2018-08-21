'use strict';

define('udaci-meals/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/item.js should pass ESLint\n\n');
  });

  QUnit.test('routes/item/nutrition.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/item/nutrition.js should pass ESLint\n\n');
  });

  QUnit.test('routes/menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/menu.js should pass ESLint\n\n');
  });
});
define('udaci-meals/tests/test-helper', ['udaci-meals/app', 'udaci-meals/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('udaci-meals/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/item/nutrition-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/item/nutrition-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/menu-test.js should pass ESLint\n\n');
  });
});
define('udaci-meals/tests/unit/routes/item-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | item', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:item');
      assert.ok(route);
    });
  });
});
define('udaci-meals/tests/unit/routes/item/nutrition-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | item/nutrition', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:item/nutrition');
      assert.ok(route);
    });
  });
});
define('udaci-meals/tests/unit/routes/menu-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | menu', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:menu');
      assert.ok(route);
    });
  });
});
define('udaci-meals/config/environment', [], function() {
  var prefix = 'udaci-meals';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('udaci-meals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
