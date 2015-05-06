import Ember from "ember";

const {
  run,
  computed
  } = Ember;

const {
  throttle,
  next,
  cancel
  } = run;

export default function throttledProperty() {

  var args = [].slice.apply(arguments);
  var rate = args.pop();
  var method = args.pop();

  var __value = null;
  var __next = null;
  var __onDestroy = false;

  var methodFn = function(key, value, oldValue) {
    if (!this.get('isDestroyed')) {
      __value = method.call(this, key, value, oldValue);
      if (!this.get('isDestroying')) {
        next(this, this.propertyDidChange, key);
      }
    }
  };

  args.push(function(key, value, oldValue) {
    if (!__onDestroy) {
      var _super = this.willDestroy;
      this.willDestroy = function() {
        cancel(__next);
        _super();
      };
      __onDestroy = true;
    }
    __next = throttle(this, methodFn, key, value, oldValue, rate);
    return __value;
  });
  return computed.apply(this, args);

}
