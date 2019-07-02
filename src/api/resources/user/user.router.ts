import { Router } from 'express';

import * as userController from './user.controller';

const router = Router();

// @route   GET api/users
// @desc    Get Users
// @access  Public
router.get('/', userController.getAllUsers);

// @route   POST api/users
// @desc    Create User
// @access  Public
router.post('/', userController.createUser);

export default router;
