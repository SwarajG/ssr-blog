import mongoose from 'mongoose';
import { blog } from '../schema';

const blogModel = mongoose.model('Blogs', blog);

export default blogModel;