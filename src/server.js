import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import appRouter from "./routes/application.js";

dotenv.config();

const app = express();
const env = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/app", appRouter);

if (process.env.NODE_ENV !== "test") {
	app.listen(env.PORT, (error) => {
		if (error) console.error(error);
		console.log(`Server is running on PORT http://localhost:${env.PORT}/app`);
	});
}

export { app };
