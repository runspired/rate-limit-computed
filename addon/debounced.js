import Ember from "ember";

const {
  run,
  computed
  } = Ember;

const {
  debounce
  } = run;

export default function debouncedProperty() {

  var args = [].slice.apply(arguments);
  var bounce = args.pop();
  var method = args.pop();

  var __value = null;

  var methodFn = function() {
    __value = method.call(this);
  };

  args.push(function() {
    debounce(this, methodFn, bounce);
    return __value;
  });
  return computed.apply(this, args);

};
