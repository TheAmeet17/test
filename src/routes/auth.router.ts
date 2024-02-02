import { Router } from 'express'
import { validate } from '../utils/validate'
import {signupBodySchema} from '../validators/auth.validator'
import * as AuthController from '../controller/auth.controller'


const router = Router();

router.post('/signup', AuthController.registerUser);
router.post('/login',AuthController.loginUser )


export default router