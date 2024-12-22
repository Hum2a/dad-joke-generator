import { module, test } from 'qunit';
import { setupTest } from 'dad-joke-generator/tests/helpers';

module('Unit | Route | jokes', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:jokes');
    assert.ok(route);
  });
});
