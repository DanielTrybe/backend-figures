"use strict";
exports.__esModule = true;
exports.VerifyRequestsParams = void 0;
var schemaZodDelete_1 = require("../zodschemas/schemaZodDelete");
var zod_1 = require("zod");
var FormatError_1 = require("./FormatError");
var VerifyRequestsParams = /** @class */ (function () {
    function VerifyRequestsParams() {
    }
    VerifyRequestsParams.prototype.verifyParamFigure = function (req, res, next) {
        var id = req.params.id;
        try {
            schemaZodDelete_1.idParam.parse(Number(id));
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                var error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    };
    VerifyRequestsParams.prototype.verifyParamImages = function (req, res, next) {
        var figureID = req.params.figureID;
        try {
            schemaZodDelete_1.figureIDParam.parse(Number(figureID));
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                var error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    };
    return VerifyRequestsParams;
}());
exports.VerifyRequestsParams = VerifyRequestsParams;
