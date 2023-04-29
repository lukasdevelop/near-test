import { Router } from 'express'
import { GetUsersByNameGithub } from '../../../../services/github/getUsersByNameGithub'

let all: GetUsersByNameGithub

const usersRoutes = Router()

usersRoutes.get('/', async (req, res) => {

    const name = 'lukasdevelop'

    all = new GetUsersByNameGithub()

    const users = await all.execute(name)

    console.log(users)

    return res.status(201).send()
})

export { usersRoutes }