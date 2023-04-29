import {Request, Response } from "express";
import { GetUsersByNameGithub } from "../../../../services/github/getUsersByNameGithub";

let getUsersByNameGithub: GetUsersByNameGithub
class ListUsersController {
     async handle(request: Request, response: Response) {

      const { name } = request.body
      
      getUsersByNameGithub = new GetUsersByNameGithub()

      const users = await getUsersByNameGithub.execute(name)

      return response.status(200).json({users})
   
  }
}

export { ListUsersController };
