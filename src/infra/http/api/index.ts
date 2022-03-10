import { ResourceNotFoundError } from "@lib/errors";
import { Router } from "express";

import v1Routes from "./v1";

const appRoutes = Router();

appRoutes.get("/health-checks", (_req, res) => {
  return res.status(200).json({
    success: {
      type: "SUCCESS_REQUEST",
      message: "The application is healthy.",
    },
  });
});

appRoutes.use(v1Routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
appRoutes.all("*/*", (req, _res) => {
  throw new ResourceNotFoundError(
    `Cannot found resource ${req.method} ${req.path}.`
  );
});

export default appRoutes;
