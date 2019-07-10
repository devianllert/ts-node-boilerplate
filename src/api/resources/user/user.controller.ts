import { Request, Response } from 'express';

import UserService from './user.service';

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await UserService.getAllUsers();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await UserService.createUser(req.body);
    const token = user.generateToken();

    return res.status(200).header('x-auth-token', token).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { getAllUsers, createUser };
