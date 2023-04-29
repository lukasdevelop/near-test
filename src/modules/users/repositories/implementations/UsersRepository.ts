import { BadRequestError } from "../../../../helpers/api-error";
import { GetUsersByNameGithub } from "../../../../services/github/getUsersByNameGithub";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: GetUsersByNameGithub

    constructor(){
        this.repository = new GetUsersByNameGithub()
    }

    async findByName(name: string): Promise<User> {
        if(!name) {
            throw new BadRequestError('Name is required.')
        }

        const users = await this.repository.execute(name)

        return users
    }
}

export { UsersRepository }