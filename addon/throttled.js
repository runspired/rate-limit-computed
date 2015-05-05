import Ember from "ember";

const {
  run,
  computed
  } = Ember;

const {
  throttle
  } = run;

export default function throttledProperty() {

  var args = [].slice.apply(arguments);
  var rate = args.pop();
  var method = args.pop();

  var __value = null;

  var methodFn = function() {
    __value = method.call(this);
  };

  args.push(function() {
    throttle(this, methodFn, rate);
    return __value;
  });
  return computed.apply(this, args);

};
