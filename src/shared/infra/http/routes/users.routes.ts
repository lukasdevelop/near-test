import { Router } from 'express'
import { ListUsersController } from '../../../../modules/users/useCases/listUsers/ListUsersController'

const listUsersController = new ListUsersController()

const usersRoutes = Router()

usersRoutes.get('/', listUsersController.handle)

export { usersRoutes }