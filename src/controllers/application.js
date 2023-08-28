import sendResponse from "../helpers/sendResponse.js";

export default function initiateApplication(req, res) {
  const message = "Application initiation Successful";
  sendResponse(res, 200, false, message);
}
