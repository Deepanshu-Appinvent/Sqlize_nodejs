
import express from 'express';
import signupController from '../controllers/signupController';

const router = express.Router();

router.post('/', signupController.signUpController);

export default router;