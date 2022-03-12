import * as grpc from "@grpc/grpc-js";

import { DiscountClient } from "../../../../proto/discount_grpc_pb";

export default new DiscountClient(
  `discount:${process.env.PORT_GRPC}`, // appDiscount
  grpc.credentials.createInsecure()
);
