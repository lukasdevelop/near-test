import { User } from "../entities/User";

interface IUsersRepository {
    findByName(name: string): Promise<User>
}

export { IUsersRepository }