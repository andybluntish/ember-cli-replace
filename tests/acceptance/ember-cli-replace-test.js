import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ember cli replace');

test('it replaces token in files', function(assert) {
  assert.expect(1);
  visit('/');

  andThen(function() {
    assert.equal(find('.replaced').text(), 'Foo is bar');
  });
});
