import mongoose from 'mongoose';
import { user } from '../schema';

const userModel = mongoose.model('Users', user);

export default userModel;