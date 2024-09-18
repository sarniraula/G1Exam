import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import errorHandler from "./error";

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token;
  if(!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = user; // Attach user data to request object
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}