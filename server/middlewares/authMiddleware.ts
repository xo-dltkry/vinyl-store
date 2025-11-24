import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import express from "express"

declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  if(req.method === 'OPTIONS') {
    return next()
  }
  try{
    const token = req.headers.authorization?.split(' ')[1]
    if(!token) {
      return res.status(401).json({message: 'Unauthorized user'})
    }
    const decoded = jwt.verify(token as string, process.env.SECRET_KEY!)
    req.user = decoded
    return next()
  } catch(e) {
    return res.status(401).json({message: 'Unauthorized user'})
  }
}