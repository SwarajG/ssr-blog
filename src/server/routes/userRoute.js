import { user } from '../controller';

export default function userRoute(app) {
  app.get('/api/users', user.getAll);

  app.post('/api/users', user.create);

  app.get('/api/user/:id', user.getById);
}