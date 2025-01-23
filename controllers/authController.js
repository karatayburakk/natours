import jwt from 'jsonwebtoken';
import { catchAsync } from '../utils/catchAsync.js';
import { User } from '../models/userModel.js';

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = jwt.sign({ id: newUser._id }, 'my-secret', {
    expiresIn: '90d',
  });

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});
