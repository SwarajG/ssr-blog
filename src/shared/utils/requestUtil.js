import { getAllBlogs, getBlogById } from '../../server/utils/blogControllerHelper';

export const fetchBlogs = () => getAllBlogs();

export const fetchBlog = id => getBlogById(id);
