import DatabaseTransactions from "@lib/databaseTransactions";
import IDatabaseTransactions from "@lib/databaseTransactions/IDatabaseTransactions";
import { DependencyContainer } from "tsyringe";

import HttpRequestAdapter from "./implementations/HttpRequestAdapter";
import RedisCacheAdapter from "./implementations/RedisAdapter";
import ICacheAdapter from "./models/ICacheAdapter";
import IHttpRequestAdapter from "./models/IHttpRequestAdapter";

export default {
  Configure(container: DependencyContainer): void {
    container
      .registerSingleton<ICacheAdapter>("CacheAdapter", RedisCacheAdapter)
      .registerSingleton<IHttpRequestAdapter>(
        "HttpRequestAdapter",
        HttpRequestAdapter
      )
      .register<IDatabaseTransactions>(
        "DatabaseTransactions",
        DatabaseTransactions
      );
  },
};
