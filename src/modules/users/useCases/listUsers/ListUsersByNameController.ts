import {Request, Response } from "express";
import { container } from 'tsyringe';
import { ListUsersByNameUseCase } from "./ListUserByNameUseCase";

class ListUsersByNameController {
     async handle(request: Request, response: Response): Promise<Response> {

      const { name } = request.body
      
      const listUserByNameUseCase = container.resolve(ListUsersByNameUseCase)

      const users = await listUserByNameUseCase.execute(name)

      return response.status(200).json(users)
   
  }
}

export { ListUsersByNameController };
