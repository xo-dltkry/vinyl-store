import { ApiError } from "../error/ApiError.ts";
import type {Request, Response, NextFunction} from "express"

export function ErrorHandlingMiddleware(err: unknown, req: Request, res: Response, next: NextFunction) {
  if(err instanceof ApiError) {
    res.status(err.status).json({message: err.message})
  }
  return res.status(500).json({message: "Unexpected error"})
}