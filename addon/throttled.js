import Ember from "ember";

const {
  run,
  computed
  } = Ember;

const {
  throttle,
  next
  } = run;

export default function throttledProperty() {

  var args = [].slice.apply(arguments);
  var rate = args.pop();
  var method = args.pop();

  var __value = null;

  var methodFn = function(key) {
    __value = method.call(this);
    next(this, this.propertyDidChange, key);
  };

  args.push(function(key) {
    throttle(this, methodFn, key, rate);
    return __value;
  });
  return computed.apply(this, args);

}
