'use strict';
var through = require('through-gulp');

module.exports = function (){
    var stream = through(function(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }
        console.log(file);
        if (file.isBuffer()) {

        }
        if (file.isStream()) {

        }
        this.push(file);
        callback();
    }, function(callback) {
        callback();
    });
    return stream;
};
