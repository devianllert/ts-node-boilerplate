import User, { UserDocument } from './user.model';

const getAllUsers = async (): Promise<UserDocument[]> => {
  try {
    const users = await User.find();

    return users;
  } catch (error) {
    throw Error(error.message);
  }
};

const createUser = async (payload: UserDocument): Promise<UserDocument> => {
  try {
    const isUserExist = !!(await User.findOne({ email: payload.email }));

    if (isUserExist) {
      throw Error('User already exists');
    }

    const user: UserDocument = new User({
      email: payload.email,
      username: payload.username,
      password: payload.password,
    });

    user.avatar = user.gravatar();

    await user.save();

    return user;
  } catch (error) {
    throw Error(error.message);
  }
};

export default {
  getAllUsers,
  createUser,
};
