import { DependencyContainer } from "tsyringe";

import HttpRequestAdapter from "./implementations/HttpRequestAdapter";
import IHttpRequestAdapter from "./models/IHttpRequestAdapter";

export default {
  Configure(container: DependencyContainer): void {
    container.registerSingleton<IHttpRequestAdapter>(
      "HttpRequestAdapter",
      HttpRequestAdapter
    );
  },
};
