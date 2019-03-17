import mongoose from 'mongoose';
import { comment } from '../schema';

const commentModel = mongoose.model('Comments', comment);

export default commentModel;