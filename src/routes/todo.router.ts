/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Router } from 'express'
import * as todoController from '../controller/todo.controller'
import { validate } from '../utils/validate'
import { createTodoDto } from '../validators/create-todo.validator'
import { putTodoDto } from '../validators/put-todo.vlaidator'
import { deleteTodoDto } from '../validators/delete-todo.validators'
import { getTodoDto } from '../validators/get-todo.vlidators'
import {authenticateToken, isAdmin} from '../middleware/authentication.middleware'
const router = Router()


//POST to database
router.post('/', validate(createTodoDto) ,authenticateToken,todoController.postTodos)

router.get('/', todoController.getAll)

//GET todos by id
router.get('/:id',validate(getTodoDto),authenticateToken,isAdmin,todoController.getTodosByID)


//DELETE by id
router.delete('/:id', validate(deleteTodoDto),authenticateToken,isAdmin,todoController.deleteTodosByID)

//UPDATE by id
router.put('/:id',validate(putTodoDto),authenticateToken,todoController.updateTodo)

export default router