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
      .number()
      .positive()
      .refine((val) => val, {
        message: `Key "serieID" must be a valid serie number and exists in object`,
      }),
    manufacturerID: z
      .number()
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
