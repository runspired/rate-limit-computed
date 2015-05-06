# Rate-limit-computed

Sometimes you need to debounce or throttle a computed property.  In the past, doing
so would usually require using an observer instead.

You'll still need to make sure your `computed.debounce` or `computed.throttle` are
consumed somewhere, else they won't ever be updated.

## Usage

    import Ember from "ember";

    const {
     computed
     } = Ember;
     
    export default Ember.Component.extend({
    
      cubed: computed.throttle('foo', function() {
        var foo = this.get('foo');
        return foo * foo * foo;
      }, 16)
    
      count: 0,
    
    });



In your template, you use the computed property just like normal.


    {{cubed}}

