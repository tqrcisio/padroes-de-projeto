import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { LogErrorControllerDecorator } from "../../decorators/logErrorControllerDecorator";
import { AddTaskController } from "../controllers/task/addTask";
import { DateValidatorAdapter } from "../dateValidatorAdapter";

export const taskControllerFactory = () => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const taskMongoRepository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRepository);
  const taskController = new AddTaskController(dbAddTask, dateValidatorAdapter);
  return new LogErrorControllerDecorator(taskController);
};