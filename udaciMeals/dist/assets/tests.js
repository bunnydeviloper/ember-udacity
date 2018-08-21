'use strict';

define('udaci-meals/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/menu-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/menu-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/order-tracker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/order-tracker.js should pass ESLint\n\n');
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

  QUnit.test('services/order-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/order-manager.js should pass ESLint\n\n');
  });
});
define('udaci-meals/tests/integration/components/menu-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | menu-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "2bhlT/Qp",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"menu-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "wA+Su+06",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"menu-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('udaci-meals/tests/integration/components/order-tracker-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | order-tracker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ZrpSiM4G",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"order-tracker\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jag8ahFB",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"order-tracker\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
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

  QUnit.test('integration/components/menu-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/menu-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/order-tracker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/order-tracker-test.js should pass ESLint\n\n');
  });

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

  QUnit.test('unit/services/order-manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/order-manager-test.js should pass ESLint\n\n');
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
define('udaci-meals/tests/unit/services/order-manager-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | order-manager', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:order-manager');
      assert.ok(service);
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
