import express from 'express';
import loginController from '../controllers/loginController';

const router = express.Router();

// Login route
router.post('/', loginController.loginController);

export default router;