import axios from "axios";
import {Request, Response } from "express";
import { errorMiddleware } from "../../../../shared/middlewares/errors/error";
import { ApiError, BadRequestError } from "../../../../helpers/api-error";

class ListUsersController {
     async handle(request: Request, response: Response) {

      throw new BadRequestError("Erro lancado do app error");
   
  }
}

export { ListUsersController };
