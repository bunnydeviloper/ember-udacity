define('routes-and-templates/tests/grader/bricks-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - grader/bricks-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'grader/bricks-test.js should pass jshint.');
  });
});