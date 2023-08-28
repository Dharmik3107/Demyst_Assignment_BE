export default function sendResponse(res, statusCode, error, message) {
  return res.status(statusCode).json({
    error: error,
    message: message ? message : {},
  });
}
