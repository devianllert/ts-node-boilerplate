import mongoose, { Schema, HookNextFunction } from 'mongoose';
import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export type UserDocument = mongoose.Document & {
  email: string;
  password: string;
  avatar: string;
  role: string;
  date: Date;
  comparePassword: (password: string) => Promise<boolean>;
  generateToken: () => string;
};

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: 'user',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', async function save(next: HookNextFunction): Promise<HookNextFunction> {
  const user = this as UserDocument;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;

  return next();
});

userSchema.methods.generateToken = function generateToken(): string {
  const { id, role } = this as UserDocument;
  const payload = {
    user: {
      id,
      role,
    },
  };

  const token: string = jwt.sign(payload, process.env.SECRET_TOKEN as Secret, { expiresIn: 3600 });

  return token;
};

userSchema.methods.comparePassword = async function comparePassword(password: string): Promise<boolean> {
  const user = this as UserDocument;
  const isMatch = await bcrypt.compare(password, user.password);

  return isMatch;
};

export default mongoose.model<UserDocument>('user', userSchema);
