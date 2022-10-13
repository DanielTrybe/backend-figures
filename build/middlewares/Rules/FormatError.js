"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatError = void 0;
class FormatError {
    convertError(err) {
        console.log(err);
        return err.issues.map((err) => {
            const error = {
                message: err.message,
                key: err.path,
                code: 400,
            };
            return error;
        });
    }
}
exports.FormatError = FormatError;
//
