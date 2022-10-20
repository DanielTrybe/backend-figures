"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyRequestsBody = void 0;
const schemasZod_1 = require("../zodschemas/schemasZod");
const zod_1 = require("zod");
const FormatError_1 = require("./FormatError");
class VerifyRequestsBody {
    verifyBodyFigure(req, res, next) {
        const { data } = req.body;
        try {
            schemasZod_1.figureBodySchema.parse(data);
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                const error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    }
    verifyBodySerie(req, res, next) {
        const { data } = req.body;
        try {
            schemasZod_1.figureSerieSchema.parse(data);
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                const error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    }
    verifyBodyImages(req, res, next) {
        const images = req.body.data;
        try {
            images.every((image) => schemasZod_1.figureImagesSchema.parse(image));
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                const error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    }
    verifyBodyImagesUpdate(req, res, next) {
        const images = req.body.data;
        try {
            images.every((image) => schemasZod_1.figureImagesUpdateSchema.parse(image));
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                const error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    }
    verifyBodyManufacturer(req, res, next) {
        const { data } = req.body;
        try {
            schemasZod_1.figureManufacturerSchema.parse(data);
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                const error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    }
}
exports.VerifyRequestsBody = VerifyRequestsBody;
