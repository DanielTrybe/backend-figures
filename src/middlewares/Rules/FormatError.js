"use strict";
exports.__esModule = true;
exports.FormatError = void 0;
var FormatError = /** @class */ (function () {
    function FormatError() {
    }
    FormatError.prototype.convertError = function (err) {
        console.log(err);
        return err.issues.map(function (err) {
            var error = {
                message: err.message,
                key: err.path,
                code: 400
            };
            return error;
        });
    };
    return FormatError;
}());
exports.FormatError = FormatError;
//
