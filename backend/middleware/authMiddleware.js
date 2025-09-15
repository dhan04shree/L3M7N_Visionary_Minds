import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // First check if header exists and is in the right format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  // Now it's safe to split
  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, process.env.KEY, (err, user) => {
      if (err) return res.status(403).json({ error: "Invalid token" });
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
