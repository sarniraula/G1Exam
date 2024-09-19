import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import errorHandler from "./error";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;
  if(!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  const user = jwt.verify(token, process.env.JWT_SECRET as string);

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = user; // Attach user data to request object
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

// export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(403).json({ message: 'Admin access only' });
//   }
// };