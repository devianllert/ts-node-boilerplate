import { Request, Response } from 'express';

import User, { UserDocument } from './user.model';

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const isUserExist = !!(await User.findOne({ email: req.body.email }));

    if (isUserExist) {
      return res.json({ msg: 'User already exists' });
    }

    const user: UserDocument = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });

    user.avatar = user.gravatar();

    await user.save();

    const token: string = user.generateToken();

    return res.header('x-auth-token', token).send(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { getAllUsers, createUser };
