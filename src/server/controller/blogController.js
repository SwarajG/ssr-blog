import { Blog } from '../model';
import { getAllBlogs, getBlogById } from '../utils/blogControllerHelper';

const blogController = {
  getAll: async (req, res) => {
    const blogs = await getAllBlogs();
    res.send(blogs);
  },

  create: (req, res) => {
    const { title, content, author } = req.body;
    const blogObject = new Blog({ title, content, author });
    blogObject.save()
      .then(blog => res.send(blog))
      .catch(error => res.send(error));
  },

  getById: async (req, res) => {
    const { id } = req.params;
    console.log('id1: ', id);
    const blog = await getBlogById(id);
    res.send(blog);
  },

  update: (req, res) => {

  },

  delete: (req, res) => {

  }
};

export default blogController;