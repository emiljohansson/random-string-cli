'use strict';
!function(name, definition) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition;
    }
    else {
        var global = this, old = global[name];
        definition.noConflict = function () {
            global[name] = old;
            return definition;
        };
        global[name] = definition;
    }
}('randomString', function() {
    var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lengthLimit = 1000,
        defaultLength = 10;

    var generator = {};
    generator.generate = function(charsLength) {
        var value = "";
        var i = charsLength || defaultLength;
        if (i > lengthLimit) {
            i = lengthLimit;
        }
        while (i--) {
            var j = Math.floor(Math.random()*characters.length);
            value += characters.charAt(j);
        }
        return value;
    };
    return generator;
}());
