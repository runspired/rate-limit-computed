import Ember from "ember";

const {
  run,
  computed
  } = Ember;

const {
  debounce,
  next
  } = run;

export default function debouncedProperty() {

  var args = [].slice.apply(arguments);
  var rate = args.pop();
  var method = args.pop();

  var __value = null;
  var __isNotifying = false;

  var methodFn = function(key) {
    if (!__isNotifying) {
      __isNotifying = true;
      __value = method.call(this);
      next(this, this.propertyDidChange, key);
    } else {
      __isNotifying = false;
    }
  };

  args.push(function(key) {
    debounce(this, methodFn, key, rate, false);
    return __value;
  });
  return computed.apply(this, args);

}
