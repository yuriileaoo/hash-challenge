/* eslint-disable import-helpers/order-imports */
import { Logger, httpLogger } from "@lib/logger";
import express, { Express } from "express";
import cors from "cors";
import { errors } from "celebrate";

import winston from "winston";
import appRoutes from "./api";

class App {
  private app: Express;
  constructor(private logger: winston.Logger) {
    this.app = express();
    this.configs();
    this.routes();
    this.handleParseErrors();
  }

  private configs(): void {
    this.app.use(cors({ origin: "*" }));
    this.app.use(express.json());

    this.app.use(httpLogger.req_logger({ logger: this.logger }));
  }

  private routes(): void {
    this.app.use(appRoutes);
  }

  private handleParseErrors() {
    this.app.use(
      errors({
        statusCode: 422,
      })
    );

    this.app.use(httpLogger.err_logger({ logger: this.logger }));
  }

  public listen(port: number): void {
    this.app.listen(port || 3001);
    Logger.info(`Server port ${port}`);
  }
}

export default App;
