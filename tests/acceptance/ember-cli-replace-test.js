import { test, module } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember cli replace', function (hooks) {
  setupApplicationTest(hooks);

  test('it can visit / and see replaced content', async function (assert) {
    assert.expect(1);

    await visit('/');
    assert.dom('.replaced').hasText('Foo is bar');
  });
});
