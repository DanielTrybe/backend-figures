"use strict";
exports.__esModule = true;
exports.figureImagesUpdateSchema = exports.figureImagesSchema = exports.figureManufacturerSchema = exports.figureSerieSchema = exports.figureBodySchema = void 0;
var zod_1 = require("zod");
exports.figureBodySchema = zod_1.z
    .object({
    name: zod_1.z.string().refine(function (val) { return val.length > 5; }, {
        params: { httpError: 400 },
        message: "Key \"name\" must be a string, min 6 characters long and exists in object"
    }),
    category: zod_1.z.string().refine(function (val) { return val.length > 5; }, {
        message: "Key \"category\" must be a string, min 6 characters long and exists in object"
    }),
    price: zod_1.z.string().refine(function (val) { return val; }, {
        message: "Key \"price\" must be a string and exists in object"
    }),
    specifications: zod_1.z.string().refine(function (val) { return val.length > 9; }, {
        message: "Key \"specifications\" must be a string, min 10 characters long and exists in object"
    }),
    releaseInfo: zod_1.z.string().refine(function (val) { return val.length === 7; }, {
        message: "Key \"releaseInfo\" must be a string, min 7 characters long, exists in object and must be like \"2022/05\"(year/month)"
    }),
    details: zod_1.z.string().refine(function (val) { return val.length >= 30; }, {
        message: "Key \"details\" must be a string, min 30 characters long and exists in object"
    }),
    serieID: zod_1.z
        .number({
        required_error: "serieID is required",
        invalid_type_error: "serieID must be a number and must be defined"
    })
        .positive()
        .refine(function (val) { return val; }, {
        message: "Key \"serieID\" must be a valid serie number and exists in object"
    }),
    manufacturerID: zod_1.z
        .number({
        required_error: "manufacturerID is required",
        invalid_type_error: "manufacturerID must be a number and must be defined"
    })
        .positive()
        .refine(function (val) { return val; }, {
        message: "Key \"manufacturerID\" must be a valid manufacturerID number and exists in object"
    })
})
    .required();
exports.figureSerieSchema = zod_1.z.object({
    serie: zod_1.z.string().refine(function (val) { return val.length > 5; }, {
        params: { httpError: 400 },
        message: "Key \"serie\" must be a string, min 6 characters long and exists in object"
    })
});
exports.figureManufacturerSchema = zod_1.z.object({
    manufacturer: zod_1.z.string().refine(function (val) { return val.length > 5; }, {
        params: { httpError: 400 },
        message: "Key \"manufacturer\" must be a string, min 6 characters long and exists in object"
    })
});
exports.figureImagesSchema = zod_1.z.object({
    link: zod_1.z.string().refine(function (val) { return val.length > 5; }, {
        params: { httpError: 400 },
        message: "Key \"link\" must be a string, min 6 characters long and exists in object"
    }),
    figureID: zod_1.z
        .number({
        required_error: "figureID is required",
        invalid_type_error: "figureID must be a number and must be defined, verify your array"
    })
        .positive({
        message: "figureID must be positive, verify your array"
    })
        .refine(function (val) { return val; }, {
        params: { httpError: 400 },
        message: "Key \"serieID\" must be a valid serie number and exists in object"
    })
});
exports.figureImagesUpdateSchema = zod_1.z.object({
    id: zod_1.z
        .number({
        required_error: "image id is required, verify your array",
        invalid_type_error: "image id must be a number and must be defined, verify your array"
    })
        .positive({
        message: "image id must be positive, verify your array"
    })
        .refine(function (val) { return val; }, {
        params: { httpError: 400 },
        message: "Key \"id\" must be a valid id number and exists in object and database"
    }),
    link: zod_1.z.string().refine(function (val) { return val.length > 5; }, {
        params: { httpError: 400 },
        message: "Key \"link\" must be a string, min 6 characters long and exists in object"
    }),
    figureID: zod_1.z
        .number({
        required_error: "figureID is required",
        invalid_type_error: "figureID must be a number and must be defined, verify your array"
    })
        .positive({
        message: "figureID must be positive, verify your array"
    })
        .refine(function (val) { return val; }, {
        params: { httpError: 400 },
        message: "Key \"serieID\" must be a valid serie number and exists in object"
    })
});
