import { GetUsersByNameGithub } from "./getUsersByNameGithub"
import { BadRequestError } from "../../helpers/api-error"

describe("Get Users of GitHub", () => {
    let getRepoGithub: GetUsersByNameGithub

    beforeEach(() => {
        getRepoGithub = new GetUsersByNameGithub()
    })

    it("should be able to list users by EXACTLY name", async () => {
        const name = "lukasdevelop"
        const user = {
            "id": 63449524,
            "imagem": "https://avatars.githubusercontent.com/u/63449524?v=4",
            "name": "lukasdevelop",
            "site": "https://github.com/lukasdevelop",
            "admin": "NÃO"
        }
        const users = await getRepoGithub.execute(name)

        expect(users[0]).toEqual(user)
    })

    it("should be able to list users by name", async () => {
        const name = "lukasdevelop"
  
        const users = await getRepoGithub.execute(name)

        expect(users[0]).toHaveProperty("id")
    })

    it("should not be list with name null", async () => {
        const name = ""
  
        await expect(
            getRepoGithub.execute(name)
        ).rejects.toEqual(new BadRequestError("Name is required"))

    })
})