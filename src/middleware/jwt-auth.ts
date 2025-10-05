import type { Request, Response, NextFunction } from "express";
import jsonwebtoken from 'jsonwebtoken';

export default function jwtAuth(req: Request, res: Response, next: NextFunction) {
  if (process.env.ENV !== 'production' && req.path === '/api-docs') return next();

  const authValue = req.headers.authorization
  if (!authValue) {
    res.status(401).json({ message: 'unauthorized' });
    return next();
  }

  const parsedAuthValue = authValue.split(' ');
  if (parsedAuthValue.length !== 2 || parsedAuthValue[0] !== 'Bearer') {
    res.status(401).json({ message: 'unauthorized' });
    return next();
  }

  const jwt = parsedAuthValue[1];
  try {
    jsonwebtoken.verify(jwt, process.env.JWT_KEY!)
    return next();
  } catch {
    res.status(401).json({ message: 'unauthorized' });
  }
  return next();
}
