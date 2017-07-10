import { test } from 'qunit'
import moduleForAcceptance from 'trailtracker-client/tests/helpers/module-for-acceptance'

// this function ensure ember app is started and shut
// down properly between each test.
// should it pass in list-trails? hyphen?
moduleForAcceptance('Acceptance | list trails')

  test('should link to information about the application.', function (assert) {
    visit('/')
  click('a:contains("About")')
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about')
  })
})

test('should link to trails information', function (assert) {
  visit('/')
  click('a:contains("Trails")')
  andThen(function () {
    assert.equal(currentURL(), '/trails', 'should navigate to trails')
  })
})
