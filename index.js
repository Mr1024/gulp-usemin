var through = require('through-gulp');

function usemin() {
    var stream = through(function(file, encoding, callback) {
        if (file.isNull()) {}
        if (file.isBuffer()) {}
        if (file.isStream()) {}
        this.push(file);
        callback();
    }, function(callback) {
        this.push(something);
        callback();
    });
    return stream;
}
module.exports = usemin;
