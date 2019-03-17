import { Blog } from '../model';

export const getAllBlogs = async () => {
  const response = await Blog.find({});
  return response;
};

export const getBlogById = async (id) => {
  const response = await Blog.findById(id);
  return response;
}