import sendResponse from "../helpers/sendResponse.js";

import calculatePreAssessment from "../services/ruleService.js";
import getProfitLossSummary from "../services/summaryProfitLoss.js";

export default function submitApplication(req, res) {
	try {
		const { businessDetails, balanceSheet } = req.body;

		//Calculating value of Pre-assessment
		const preAssessment = calculatePreAssessment(balanceSheet, businessDetails.loanAmount);

		const summary = getProfitLossSummary(balanceSheet);
		//Sending business details and pre-assessment value
		const applicationData = { businessDetails, summary, preAssessment };
		// const decisionEngineResponse = simulateDecisionEngine(applicationData);

		//Sending response to the frontend
		// const message = decisionEngineResponse ? decisionEngineResponse : "Decision Outcome";
		const message = true || false;
		if (message) sendResponse(res, 200, false, message);
		else sendResponse(res, 501, true, "Internal Server Error");
	} catch (error) {
		sendResponse(res, 500, true, "Internal Server Error");
		console.log(error);
	}
}
