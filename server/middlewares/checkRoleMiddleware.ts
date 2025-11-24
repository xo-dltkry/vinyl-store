import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import express from "express"

interface JwtPayload {
  id: number;
  email: string;
  role: string;
}

export function roleMiddleware(role: string) {
  return function checkRoleMiddleware(req: Request, res: Response, next: NextFunction) {
    if(req.method === 'OPTIONS') {
      return next()
    }
    try{
      const token = req.headers.authorization?.split(' ')[1]
      if(!token) {
        return res.status(401).json({message: 'Unauthorized user'})
      }
      const decoded = jwt.verify(token as string, process.env.SECRET_KEY!) as JwtPayload
      req.user = decoded
      console.log(req.user);
      console.log(decoded);
      console.log(token);
      if(decoded.role !== role) {
        return res.status(403).json({message: 'No access'})
      }
      return next()
    } catch(e) {
      return res.status(401).json({message: 'Unauthorized user'})
    }
  }
}

