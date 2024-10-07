import { Router } from "express";

import { expressAdapterRouter } from "../../../expressRouteAdapter";
import { taskControllerFactory } from "../../../factories/taskControllerFactory";


export default (router: Router): void => {
  router.post("/tasks",expressAdapterRouter(taskControllerFactory()));
};
