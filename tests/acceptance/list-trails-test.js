import { test } from 'qunit';
import moduleForAcceptance from 'trailtracker-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list trails');

test('visiting /list-trails', function(assert) {
  visit('/list-trails');

  andThen(function() {
    assert.equal(currentURL(), '/list-trails');
  });
});
