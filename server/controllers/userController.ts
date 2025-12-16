import { ApiError } from "../error/ApiError.ts"
import type {Request, Response, NextFunction} from "express"
import {User} from '../models/models.ts'
import type { IUser } from "../models/models.ts"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { json } from "sequelize"

const generateJwt = (id: number, email: string, role: string) => {
  return jwt.sign(
    {id, email, role},
    process.env.SECRET_KEY!,
    {expiresIn: "24h"}
  )
}

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    const {email, password, role} = req.body
    if(!email || !password) {
      return next(ApiError.badRequest("Incorrect email or password"))
    }
    const candidate = await User.findOne({where: {email}})
    if(candidate) {
      return next(ApiError.badRequest("This email is already taken"))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const userRole = role ? role.toUpperCase() : 'USER';
    const user = await User.create({email, password: hashPassword, role: userRole}) as unknown as IUser
    const token = generateJwt(user.id, user.email, userRole)
    return res.json({token})
  }
  async login(req: Request, res: Response, next: NextFunction) {
    const {email, password} = req.body
    const userModel = await User.findOne({where: {email}})
    const user = userModel?.get() as IUser
    if(!user) {
      return next(ApiError.internal('User not found'))
    }
    const comparePassword = bcrypt.compareSync(password, user.password)
    if(!comparePassword) {
      return next(ApiError.badRequest('Incorrect password'))
    }
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({token})
  }
  async check(req: Request, res: Response, next: NextFunction) {
    const { id, email, role } = req.user;
    const token = generateJwt(id, email, role)
    return res.json({token})
  }
}

export default new UserController()