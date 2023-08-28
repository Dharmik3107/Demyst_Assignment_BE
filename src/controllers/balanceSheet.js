import sendResponse from "../helpers/sendResponse.js";
import balanceSheetData from "../data/sampleBalanceSheet.js";

export default async function fetchBalanceSheet(req, res) {
	try {
		//Sending Sample balance sheet data to the frontend
		sendResponse(res, 200, false, balanceSheetData);
	} catch (error) {
		console.log(error);
	}
}
