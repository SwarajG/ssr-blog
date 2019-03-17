import { Comment } from '../model';

const commentController = {
  getAll: (req, res) => {
    Comment.find({})
      .then((comments) => {
        res.send(comments);
      });
  },

  create: (req, res) => {
    const { content, author, blogId } = req.body;
    const commentObject = new Comment({ content, author, blogId });
    commentObject.save((error, comment) => {
      if (error) {
        res.send(error);
      }
      res.send('Comment successfully created');
    });
  },

  getById: (req, res) => {

  },

  update: (req, res) => {

  },

  delete: (req, res) => {

  }
};

export default commentController;