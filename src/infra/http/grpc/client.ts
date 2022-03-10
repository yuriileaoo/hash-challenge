import * as grpc from "@grpc/grpc-js";

import { DiscountClient } from "../../../../proto/discount_grpc_pb";

export default new DiscountClient(
  `localhost:${process.env.PORT_GRPC}`,
  grpc.credentials.createInsecure()
);
