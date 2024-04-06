export function checkRequestBody(req, res, next) {
  if (!req.body) {
    return res.status(400).json({ message: "Request body is required" });
  }
  next();
}
