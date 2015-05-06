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
  }, 750),


  squaredTriggered: 0,

  squared: computed.debounce('count', function() {
    var count = this.get('count');
    this.incrementProperty('squaredTriggered');
    return count * count;
  }, 750),

  count: 0,

  actions: {
    plusOne: function() {
      this.incrementProperty('count');
    },
    triggerThree: function() {
      this.incrementProperty('count');
      run.later(this, function() { this.incrementProperty('count'); }, 250);
      run.later(this, function() { this.incrementProperty('count'); }, 250);
    }
  }

});
// END-SNIPPET
