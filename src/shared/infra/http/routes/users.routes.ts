import { Router } from 'express'
import axios from 'axios'

const usersRoutes = Router()

usersRoutes.get('/', async (req, res) => {
    const result = await axios.get(`https://api.github.com/users/lukasdevelop`)

    console.log(result.data)

    return res.status(201).send()
})

export { usersRoutes }