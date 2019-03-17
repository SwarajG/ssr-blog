import { Like } from '../model';

const likeController = {
  getAll: (req, res) => {
    Like.find({})
      .then((likes) => {
        res.send(likes);
      });
  },

  create: (req, res) => {
    const { author, blogId } = req.body;
    const likeObject = new Like({ author, blogId });
    likeObject.save((error, like) => {
      if (error) {
        res.send(error);
      }
      res.send('like successfully created');
    });
  },

  getById: (req, res) => {

  },

  update: (req, res) => {

  },

  delete: (req, res) => {

  }
};

export default likeController;