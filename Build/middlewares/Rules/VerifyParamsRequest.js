"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyRequestsParams = void 0;
const schemaZodDelete_1 = require("../zodschemas/schemaZodDelete");
const zod_1 = require("zod");
const FormatError_1 = require("./FormatError");
class VerifyRequestsParams {
    verifyParamFigure(req, res, next) {
        const { id } = req.params;
        try {
            schemaZodDelete_1.idParam.parse(Number(id));
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                const error = new FormatError_1.FormatError();
                return res.status(400).json(error.convertError(err));
            }
        }
        next();
    }
    verifyParamImages(req, res, next) {
        const { figureID } = req.params;
        try {
            schemaZodDelete_1.figureIDParam.parse(Number(figureID));
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
exports.VerifyRequestsParams = VerifyRequestsParams;
