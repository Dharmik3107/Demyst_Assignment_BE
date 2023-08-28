import sendResponse from "../helpers/sendResponse.js";

export default function initiateApplication(req, res) {
	const { isApplicationInitiated } = req.body;

	const successMessage = "Application initiation Successful";
	const failureMessage = "Application initiation Unsuccessful";

	//Based on application initiation sending messages to the frontend side
	if (isApplicationInitiated) sendResponse(res, 200, false, successMessage);
	else sendResponse(res, 401, true, failureMessage);
}
