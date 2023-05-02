import { Router } from 'express'
import { ListUsersByNameController } from '@modules/users/useCases/listUsers/ListUsersByNameController'

const listUsersByNameController = new ListUsersByNameController()

const usersRoutes = Router()


usersRoutes.get('/', (req, res) =>{
    res.status(200).json({message: "Bem vindo (a), nessa mesma URL insira um nome do usuario do GITHUB. Exemplo http://example/users/name"})
})

usersRoutes.get('/:name', listUsersByNameController.handle)

export { usersRoutes }