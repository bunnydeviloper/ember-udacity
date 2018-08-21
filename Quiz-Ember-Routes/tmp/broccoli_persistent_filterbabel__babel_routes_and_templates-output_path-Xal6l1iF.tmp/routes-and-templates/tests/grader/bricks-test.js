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