import mongoose from 'mongoose';
import validator from 'validator';
import { hash } from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail],
  },
  photo: String,
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: 'Passwords does not match',
    },
  },
});

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return next();

  this.password = await hash(this.password, 12);

  this.passwordConfirm = undefined;
});

export const User = mongoose.model('User', userSchema);
