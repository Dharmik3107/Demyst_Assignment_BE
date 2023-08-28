import sendResponse from "../helpers/sendResponse.js";
import calculatePreAssessment from "../services/ruleService.js";

export default function submitApplication(req, res) {
	try {
		const { businessDetails, loanAmount, balanceSheet } = req.body;

		//Calculating value of Pre-assessment
		const preAssessment = calculatePreAssessment(balanceSheet, loanAmount);

		//Sending business details and pre-assessment value
		const applicationData = { businessDetails, preAssessment };
		const decisionEngineResponse = simulateDecisionEngine(applicationData);

		//Sending response to the frontend
		if (decisionEngineResponse) sendResponse(res, 200, false, decisionEngineResponse);
		else sendResponse(res, 501, true, "Internal Server Error");
	} catch (error) {
		console.log(error);
	}
}
