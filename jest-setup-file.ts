import "reflect-metadata";
import "dotenv/config";
import { Logger } from "./src/lib/logger";

jest.setTimeout(50000);

Logger.init(false);
