import { z } from "zod";

export const figureBodySchema = z
  .object({
    name: z.string().refine((val) => val.length > 5, {
      params: { httpError: 400 },
      message: `Key "name" must be a string, min 6 characters long and exists in object`,
    }),
    category: z.string().refine((val) => val.length > 5, {
      message: `Key "category" must be a string, min 6 characters long and exists in object`,
    }),
    price: z.string().refine((val) => val, {
      message: `Key "price" must be a string and exists in object`,
    }),
    specifications: z.string().refine((val) => val.length > 9, {
      message: `Key "specifications" must be a string, min 10 characters long and exists in object`,
    }),
    releaseInfo: z.string().refine((val) => val.length === 7, {
      message: `Key "releaseInfo" must be a string, min 7 characters long, exists in object and must be like "2022/05"(year/month)`,
    }),
    details: z.string().refine((val) => val.length >= 30, {
      message: `Key "details" must be a string, min 30 characters long and exists in object`,
    }),
    serieID: z
      .number({
        required_error: "serieID is required",
        invalid_type_error: "serieID must be a number and must be defined",
      })
      .positive()
      .refine((val) => val, {
        message: `Key "serieID" must be a valid serie number and exists in object`,
      }),
    manufacturerID: z
      .number({
        required_error: "manufacturerID is required",
        invalid_type_error:
          "manufacturerID must be a number and must be defined",
      })
      .positive()
      .refine((val) => val, {
        message: `Key "manufacturerID" must be a valid manufacturerID number and exists in object`,
      }),
  })
  .required();

export const figureSerieSchema = z.object({
  serie: z.string().refine((val) => val.length > 5, {
    params: { httpError: 400 },
    message: `Key "serie" must be a string, min 6 characters long and exists in object`,
  }),
});

export const figureManufacturerSchema = z.object({
  manufacturer: z.string().refine((val) => val.length > 5, {
    params: { httpError: 400 },
    message: `Key "manufacturer" must be a string, min 6 characters long and exists in object`,
  }),
});

export const figureImagesSchema = z.object({
  link: z.string().refine((val) => val.length > 5, {
    params: { httpError: 400 },
    message: `Key "link" must be a string, min 6 characters long and exists in object`,
  }),
  figureID: z
    .number({
      required_error: "figureID is required",
      invalid_type_error:
        "figureID must be a number and must be defined, verify your array",
    })
    .positive({
      message: "figureID must be positive, verify your array",
    })
    .refine((val) => val, {
      params: { httpError: 400 },
      message: `Key "serieID" must be a valid serie number and exists in object`,
    }),
});

export const figureImagesUpdateSchema = z.object({
  id: z
    .number({
      required_error: "image id is required",
      invalid_type_error:
        "image id must be a number and must be defined, verify your array",
    })
    .positive({
      message: "image id must be positive, verify your array",
    })
    .refine((val) => val, {
      params: { httpError: 400 },
      message: `Key "id" must be a valid id number and exists in object and database`,
    }),
  link: z.string().refine((val) => val.length > 5, {
    params: { httpError: 400 },
    message: `Key "link" must be a string, min 6 characters long and exists in object`,
  }),
  figureID: z
    .number({
      required_error: "figureID is required",
      invalid_type_error:
        "figureID must be a number and must be defined, verify your array",
    })
    .positive({
      message: "figureID must be positive, verify your array",
    })
    .refine((val) => val, {
      params: { httpError: 400 },
      message: `Key "serieID" must be a valid serie number and exists in object`,
    }),
});
