import { NextFunction, Request, Response } from "express";
import { ValidateError } from "tsoa";

export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidateError) {
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      message: err.message,
    });
  }

  res.status(500).json({ message: 'Internal Server Error' });
}
