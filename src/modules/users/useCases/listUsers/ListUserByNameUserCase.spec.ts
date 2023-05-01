import "reflect-metadata"
import { ListUsersByNameUseCase } from "./ListUserByNameUseCase"
import { UsersRepository } from "@modules/users/repositories/implementations/UsersRepository"
import { BadRequestError } from "@helpers/api-error"

let listUserByNameUserCase: ListUsersByNameUseCase
let usersRepository: UsersRepository

describe("List user by name", () => {
    beforeEach(() => {
        usersRepository = new UsersRepository()
        listUserByNameUserCase = new ListUsersByNameUseCase(usersRepository)
       })
    it("should be to able list users by name", async () => {
        const name = "lukasdevelop"
        const users = await listUserByNameUserCase.execute(name)
        expect(users[0]).toHaveProperty("id")
    })

    it("should not be to able list without name", async () => {
        const name = ""
        const users = listUserByNameUserCase.execute(name)
        await expect(users).rejects.toEqual(new BadRequestError('Name is required.'))
    })
})