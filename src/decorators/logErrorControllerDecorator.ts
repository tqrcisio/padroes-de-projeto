import { Controller } from "../adapters/interfaces/controller";
import { HttpRequest, HttpResponse } from "../adapters/interfaces/http";
import { LogErrorRepository } from "../usecases/repository/logErrorRepository";

export class LogErrorControllerDecorator implements Controller{
  constructor(
    private readonly controller: Controller,
    private readonly logErrorRepository: LogErrorRepository
  ){}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest);
    if(httpResponse.statusCode === 500){
      await this.logErrorRepository.log(httpResponse.body.stack);
    }
    return httpResponse;
  }
} 