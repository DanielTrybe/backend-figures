"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.figureIDParam = exports.idParam = void 0;
const zod_1 = require("zod");
exports.idParam = zod_1.z
    .number({
    required_error: "id is required",
    invalid_type_error: "id must be a number and must be defined",
})
    .positive()
    .refine((val) => val, {
    message: `Key "id" must be a valid serie number and exists in params`,
});
exports.figureIDParam = zod_1.z
    .number({
    required_error: "figureID is required",
    invalid_type_error: "figureID must be a number and must be defined",
})
    .positive()
    .refine((val) => val, {
    message: `Key "figureID" must be a valid serie number and exists in params`,
});
