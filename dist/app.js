(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var ModelsFactory = require('./models');
var App = (function () {
    function App() {
        this.user = ModelsFactory.getModel('user');
        console.log(this.user.name);
    }
    return App;
}());
new App();

},{"./models":2}],2:[function(require,module,exports){
"use strict";
var User = require('./user');
var ModelsFactory = (function () {
    function ModelsFactory() {
        if (ModelsFactory._instance) {
            throw new Error("Error: Instantiation failed: Use ModelsFactory.getInstance() instead of new.");
        }
        ModelsFactory._instance = this;
    }
    ModelsFactory.getInstance = function () {
        return ModelsFactory._instance;
    };
    ModelsFactory.getModel = function (type) {
        if (type.toLowerCase() === 'user') {
            return new User();
        }
    };
    ModelsFactory._instance = new ModelsFactory();
    return ModelsFactory;
}());
module.exports = ModelsFactory;

},{"./user":3}],3:[function(require,module,exports){
"use strict";
var User = (function () {
    function User() {
        this.name = 'n/a';
    }
    return User;
}());
module.exports = User;

},{}]},{},[1]);
