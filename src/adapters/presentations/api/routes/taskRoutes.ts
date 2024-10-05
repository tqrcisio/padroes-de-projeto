import { Request, Response, Router } from "express";
import { AddTaskController } from "../../../controllers/task/addTask";
import { expressAdapterRouter } from "../../../expressRouteAdapter";

export default (router: Router): void => {
  const addTaskController = new AddTaskController();
  router.post("/tasks",expressAdapterRouter(addTaskController));
};
