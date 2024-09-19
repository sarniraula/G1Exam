import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      isAdmin: boolean;
      freeTestsTaken: number;
      // Add other user properties if needed
    };
  }
}