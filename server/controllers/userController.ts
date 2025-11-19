import { ApiError } from "../error/ApiError.ts"
import type {Request, Response, NextFunction} from "express"

class UserController {
  // async registration(req, res) {

  // }
  // async login(req, res) {

  // }
  async check(req: Request, res: Response, next: NextFunction) {
    const {id} = req.query
    if(!id) {
      return next(ApiError.badRequest('No id'))
    } 
    res.json(id)
  }
}

export default new UserController()