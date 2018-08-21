define('routes-and-templates/tests/routes/bricks.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/bricks.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bricks.js should pass jshint.');
  });
});