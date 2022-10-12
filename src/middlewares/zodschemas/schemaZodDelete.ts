import { z } from "zod";

export const idParam = z
  .number({
    required_error: "id is required",
    invalid_type_error: "id must be a number and must be defined",
  })
  .positive()
  .refine((val) => val, {
    message: `Key "id" must be a valid serie number and exists in params`,
  });

export const figureIDParam = z
  .number({
    required_error: "figureID is required",
    invalid_type_error: "figureID must be a number and must be defined",
  })
  .positive()
  .refine((val) => val, {
    message: `Key "figureID" must be a valid serie number and exists in params`,
  });
