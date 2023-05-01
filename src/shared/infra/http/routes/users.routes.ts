import { Router } from 'express'
import { ListUsersByNameController } from '@modules/users/useCases/listUsers/ListUsersByNameController'

const listUsersByNameController = new ListUsersByNameController()

const usersRoutes = Router()

usersRoutes.get('/:name', listUsersByNameController.handle)

export { usersRoutes }