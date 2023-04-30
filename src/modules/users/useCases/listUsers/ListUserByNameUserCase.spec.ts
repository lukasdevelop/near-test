import "reflect-metadata"
import { ListUsersByNameUseCase } from "./ListUserByNameUseCase"
import { UsersRepository } from "../../repositories/implementations/UsersRepository"

let listUserByNameUserCase: ListUsersByNameUseCase
let usersRepository: UsersRepository

describe("List user by name", () => {
    beforeEach(() => {
        usersRepository = new UsersRepository()
        listUserByNameUserCase = new ListUsersByNameUseCase(usersRepository)
       })
    it("should be to able list users by name", async () => {
        const name = "joao"
        const users = await listUserByNameUserCase.execute(name)

        console.log(users)

    })
})