import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "modules/users/entities/User";


@injectable()
class ListUsersByNameUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute(name: string): Promise<User>{
    const users = await this.usersRepository.findByName(name)
    return users
  }
}

export { ListUsersByNameUseCase };
