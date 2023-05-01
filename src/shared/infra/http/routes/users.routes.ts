import { Router } from 'express'
import { ListUsersByNameController } from '@modules/users/useCases/listUsers/ListUsersByNameController'

const listUsersByNameController = new ListUsersByNameController()

const usersRoutes = Router()

usersRoutes.get('/', listUsersByNameController.handle)

export { usersRoutes }