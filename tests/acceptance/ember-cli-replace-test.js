import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: EmberCliReplace', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('it replaces token in files', function(assert) {
  assert.expect(1);
  visit('/');

  andThen(function() {
    assert.equal(find('.replaced').text(), 'Foo is bar');
  });
});
