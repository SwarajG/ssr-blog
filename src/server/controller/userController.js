import { User } from '../model';

const userController = {
  getAll: (req, res) => {
    User.find({})
      .then((users) => {
        res.send(users);
      });
  },

  create: (req, res) => {
    const { email, password } = req.body;
    const userObject = new User({ email, password });
    userObject.save((error, user) => {
      if (error) {
        res.send(error);
      }
      res.send('user successfully created');
    });
  },

  getById: (req, res) => {

  },

  update: (req, res) => {

  },

  delete: (req, res) => {

  }
};

export default userController;