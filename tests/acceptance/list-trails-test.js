import { test } from 'qunit';
import moduleForAcceptance from 'trailtracker-client/tests/helpers/module-for-acceptance';

// this function ensure ember app is started and shut
// down properly between each test.
// should it pass in list-trails? hyphen?
moduleForAcceptance('Acceptance | list trails');

test('visiting /list-trails', function(assert) {
  visit('/list-trails');

  andThen(function() {
    assert.equal(currentURL(), '/list-trails');
  });
});
