// BEGIN-SNIPPET debounce-throttle-example
import Ember from "ember";

const {
  computed,
  run
  } = Ember;

export default Ember.Controller.extend({

  cubedTriggered: 0,

  cubed: computed.throttle('count', function() {
    var count = this.get('count');
    this.incrementProperty('cubedTriggered');
    return count * count * count;
  }, 16),


  squaredTriggered: 0,

  squared: computed.debounce('count', function() {
    var count = this.get('count');
    this.incrementProperty('squaredTriggered');
    return count * count;
  }, 16),

  count: 0,

  actions: {
    plusOne: function() {
      this.incrementProperty('count');
    },
    triggerThree: function() {
      this.incrementProperty('count');
      run.later(this, function() { this.incrementProperty('count'); }, 4);
      run.later(this, function() { this.incrementProperty('count'); }, 4);
    }
  }

});
// END-SNIPPET
