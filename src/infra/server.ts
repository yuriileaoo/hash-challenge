import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";

import { Logger } from "@lib/logger";

import App from "./http/app";

const logger = Logger.init(Boolean(process.env.LOGGER_INTEGRATION) || false);

const app = new App(logger);

const PORT = Number(process.env.PORT) || 3339;

app.listen(PORT);
