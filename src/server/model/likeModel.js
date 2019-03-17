import mongoose from 'mongoose';
import { like } from '../schema';

const likeModel = mongoose.model('Likes', like);

export default likeModel;