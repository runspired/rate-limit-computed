# Rate-limit-computed


[![npm version](https://badge.fury.io/js/rate-limit-computed.svg)](http://badge.fury.io/js/rate-limit-computed)
[![Build Status](https://travis-ci.org/runspired/rate-limit-computed.svg?branch=master)](https://travis-ci.org/runspired/rate-limit-computed)
[![Ember Observer Score](http://emberobserver.com/badges/rate-limit-computed.svg)](http://emberobserver.com/addons/rate-limit-computed)
[![Circle CI](https://circleci.com/gh/runspired/rate-limit-computed/tree/master.svg?style=svg)](https://circleci.com/gh/runspired/rate-limit-computed/tree/master)

Ember addon for debouncing or throttling a computed property.  Interactive
documentation is here: [http://runspired.github.io/rate-limit-computed/](http://runspired.github.io/rate-limit-computed/).


Sometimes you need to debounce or throttle a computed property.  In the past, doing
so would usually require using an observer instead.

You'll still need to make sure your `computed.debounce` or `computed.throttle` are
consumed somewhere, else they won't ever be updated.

[![dependencies](https://david-dm.org/runspired/rate-limit-computed.svg)](https://david-dm.org/runspired/rate-limit-computed)
[![devDependency Status](https://david-dm.org/runspired/rate-limit-computed/dev-status.svg)](https://david-dm.org/runspired/rate-limit-computed#info=devDependencies)


## Installation

If you are on a recent version of `ember-cli`, do the following:

    ember install rate-limit-computed


This is the equivalent of:

    npm install --save-dev rate-limit-computed

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

