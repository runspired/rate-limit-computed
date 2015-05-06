import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('Ember.computed.throttle Integration Tests', {

  beforeEach: function() {
    App = startApp();
  },

  afterEach: function() {
    Ember.run(App, App.destroy);
  }

});

test("Ember.computed.throttle updates property values correctly", function(assert) {
  assert.expect(9);
  visit('/');

  var controller = getController('application');

  andThen(function () {


    assert.equal(controller.get('cubedTriggered'), 1, 'The computed property was triggered once during setup.');
    assert.equal(find('#cubedValue').text(), '0', 'The Screen reflects the correct initial value.');
    assert.equal(controller.get('cubed'), 0, 'The computed property is set correctly during setup.');

    click('#plusOne');

    andThen(function() {
      assert.equal(controller.get('cubedTriggered'), 2, 'The computed property triggers correctly.');
      assert.equal(find('#cubedValue').text(), '1', 'The Screen reflects the correct updated value.');
      assert.equal(controller.get('cubed'), 1, 'The computed property reflects the correct value.');
    });

    click('#triggerThree');

    andThen(function() {
      assert.equal(controller.get('cubedTriggered'), 3, 'The computed property triggered only once.');
      assert.equal(find('#cubedValue').text(), '8', 'The Screen reflects the correct value of 2x2x2.');
      assert.equal(controller.get('cubed'), 8, 'The computed property reflects the correct value of 2*2*2.');
    });

  });

});

