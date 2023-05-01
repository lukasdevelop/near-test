import { GetUsersByNameGithub } from "@services/github/getUsersByNameGithub";
import { User } from "@modules/users/entities/User";
import { IUsersRepository } from "../IUsersRepository";
class UsersRepository implements IUsersRepository {
  private repository: GetUsersByNameGithub;

  constructor() {
    this.repository = new GetUsersByNameGithub();
  }

  async findByName(name: string): Promise<User> {
    const users = await this.repository.execute(name);
    return users;
  }
}

export { UsersRepository };
