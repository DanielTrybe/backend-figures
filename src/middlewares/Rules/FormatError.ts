import { ZodError } from "zod";

export class FormatError {
  convertError(
    err: ZodError
  ): Array<{ message: string; key: (string | number)[]; code: number }> {
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
//
