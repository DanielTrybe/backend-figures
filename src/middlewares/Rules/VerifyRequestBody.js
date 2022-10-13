"use strict";
exports.__esModule = true;
exports.VerifyRequestsBody = void 0;
var schemasZod_1 = require("../zodschemas/schemasZod");
var zod_1 = require("zod");
var FormatError_1 = require("./FormatError");
var VerifyRequestsBody = /** @class */ (function () {
    function VerifyRequestsBody() {
    }
    VerifyRequestsBody.prototype.verifyBodyFigure = function (req, res, next) {
        var data = req.body.data;
        try {
            schemasZod_1.figureBodySchema.parse(data);
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                var error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    };
    VerifyRequestsBody.prototype.verifyBodySerie = function (req, res, next) {
        var data = req.body.data;
        try {
            schemasZod_1.figureSerieSchema.parse(data);
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                var error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    };
    VerifyRequestsBody.prototype.verifyBodyImages = function (req, res, next) {
        var images = req.body.data;
        try {
            images.every(function (image) {
                return schemasZod_1.figureImagesSchema.parse(image);
            });
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                var error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    };
    VerifyRequestsBody.prototype.verifyBodyImagesUpdate = function (req, res, next) {
        var images = req.body.data;
        try {
            images.every(function (image) {
                return schemasZod_1.figureImagesUpdateSchema.parse(image);
            });
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                var error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    };
    VerifyRequestsBody.prototype.verifyBodyManufacturer = function (req, res, next) {
        var data = req.body.data;
        try {
            schemasZod_1.figureManufacturerSchema.parse(data);
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                var error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    };
    return VerifyRequestsBody;
}());
exports.VerifyRequestsBody = VerifyRequestsBody;
